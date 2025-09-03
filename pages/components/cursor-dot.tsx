import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window) return;
    const dot = dotRef.current!;
    let seenPointer = false;

    const setScale = (s: number) => { scaleRef.current = s; };

    const onPointerMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!seenPointer) {
        dot.style.opacity = "1";
        seenPointer = true;
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const interactive = el.closest("a, button, [role='button'], .card") !== null;
      setScale(interactive ? 1.55 : 1);
    };

    const onMouseOutWindow = (e: MouseEvent) => {
      const to = e.relatedTarget as Node | null;
      if (!to) dot.style.opacity = "0";
    };

    const onDown = () => setScale(0.65);
    const onUp = () => setScale(1);

    const showDot = () => {
      dot.style.opacity = "1";
      seenPointer = true;
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") showDot();
    };

    const tick = () => {
      const lerp = 0.0;
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;
      dot.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scaleRef.current})`;
      rafRef.current = requestAnimationFrame(tick);
    };

    pos.current = target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    rafRef.current = requestAnimationFrame(tick);

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("mouseout", onMouseOutWindow);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("focus", showDot);
    window.addEventListener("pageshow", showDot);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("mouseout", onMouseOutWindow);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("focus", showDot);
      window.removeEventListener("pageshow", showDot);
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div id="dot-cursor" ref={dotRef} aria-hidden="true" />;
}
