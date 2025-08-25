'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type RAF = number | null;

type Props = {
  src: string;
  size?: number;
  speed?: number;
  evadeRadius?: number;
  zIndex?: number;
};

export default function TennisBallEvader({
  src,
  size = 48,
  speed = 1,
  evadeRadius = 120,
  zIndex = 60,
}: Props) {
  //  & velocity
  const x = useRef(0);
  const y = useRef(0);
  const vx = useRef(0);
  const vy = useRef(0);

  // mouse position
  const mx = useRef<number | null>(null);
  const my = useRef<number | null>(null);

  // dom & raf
  const elRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<RAF>(null);

  // settings
  const DAMPING = 0.98;           // per-frame velocity damping
  const BOUNCE_LOSS = 0.85;       // energy loss on wall bounce
  const GRAVITY = 220;            // mild gravity to keep motion lively
  const MAX_FPS = 1000 / 60;
  const WALL_MARGIN = 10;
  const CLICK_IMPULSE = 1050;     // impulse when user tries to click near
  const EVADE_IMPULSE = 650;      // impulse when cursor gets close
  const RANDOM_JITTER = 8;        // tiny randomness to keep it organic

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    x.current = Math.random() * (w - 2 * (size + WALL_MARGIN)) + size + WALL_MARGIN;
    y.current = Math.random() * (h - 2 * (size + WALL_MARGIN)) + size + WALL_MARGIN;

    const angle = Math.random() * Math.PI * 2;
    const base = prefersReduced ? 120 : 240 * speed;
    vx.current = Math.cos(angle) * base;
    vy.current = Math.sin(angle) * base * 0.6; // slightly less vertical to start
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track mouse
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const cx = x.current;
      const cy = y.current;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist <= Math.max(evadeRadius, size * 1.25)) {
        const nx = dx === 0 ? (Math.random() - 0.5) : dx / dist;
        const ny = dy === 0 ? (Math.random() - 0.5) : dy / dist;
        vx.current -= nx * CLICK_IMPULSE;
        vy.current -= ny * CLICK_IMPULSE * 0.9 - (prefersReduced ? 200 : -300); // add a bit of upward bias
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [evadeRadius, prefersReduced, size]);

  useEffect(() => {
    let last = performance.now();

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, MAX_FPS / 1000);
      last = now;

      const w = window.innerWidth;
      const h = window.innerHeight;

      if (mx.current !== null && my.current !== null) {
        const dx = mx.current - x.current;
        const dy = my.current - y.current;
        const dist = Math.hypot(dx, dy);

        if (dist < evadeRadius) {
          const strength = (1 - dist / evadeRadius);
          const nx = dx === 0 ? (Math.random() - 0.5) : dx / dist;
          const ny = dy === 0 ? (Math.random() - 0.5) : dy / dist;
          const impulse = prefersReduced ? 280 : 480;
          vx.current -= nx * impulse * strength;
          vy.current -= ny * impulse * strength + (prefersReduced ? 60 : 140);
        }
      }

      if (!prefersReduced) {
        vy.current += GRAVITY * dt;
        vx.current += (Math.random() - 0.5) * RANDOM_JITTER;
        vy.current += (Math.random() - 0.5) * (RANDOM_JITTER * 0.5);
      }

      x.current += vx.current * dt;
      y.current += vy.current * dt;

      const left = WALL_MARGIN + size / 2;
      const right = w - WALL_MARGIN - size / 2;
      const top = WALL_MARGIN + size / 2;
      const bottom = h - WALL_MARGIN - size / 2;

      if (x.current < left) {
        x.current = left;
        vx.current = -vx.current * BOUNCE_LOSS;
      } else if (x.current > right) {
        x.current = right;
        vx.current = -vx.current * BOUNCE_LOSS;
      }

      if (y.current < top) {
        y.current = top;
        vy.current = -vy.current * BOUNCE_LOSS;
      } else if (y.current > bottom) {
        y.current = bottom;
        vy.current = -vy.current * BOUNCE_LOSS;
      }

      vx.current *= DAMPING;
      vy.current *= DAMPING;

      if (elRef.current) {
        elRef.current.style.transform = `translate3d(${x.current - size / 2}px, ${y.current - size / 2}px, 0)`;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [size, speed, evadeRadius, prefersReduced]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex }}
    >
      <div
        ref={elRef}
        className="absolute will-change-transform"
        style={{ width: size, height: size }}
      >
        <div
          className="pointer-events-auto"
          style={{ width: size, height: size }}
        >
          <Image
            src={src}
            alt="Tennis Ball"
            width={size}
            height={size}
            draggable={false}
            priority
            style={{
              userSelect: 'none',
              pointerEvents: 'none',
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
