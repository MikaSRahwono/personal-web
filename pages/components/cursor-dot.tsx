import { useEffect, useRef } from "react";

declare global {
  interface Window {
    cursorSetEmoji?: (opts: { char?: string; src?: string; size?: number }) => void;
    cursorRestore?: () => void;
  }
}

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);

  // Save/restore styles when we switch to emoji mode
  const savedRef = useRef<Partial<CSSStyleDeclaration> & { text?: string | null; dataEmoji?: string | null } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window) return;
    const dot = dotRef.current!;
    dot.style.position = "fixed";
    dot.style.pointerEvents = "none";
    dot.style.transformOrigin = "50% 50%";
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
      const lerp = 0.0; // keep your setting (0 = snap)
      if (lerp <= 0) {
        pos.current.x = target.current.x;
        pos.current.y = target.current.y;
      } else {
        pos.current.x += (target.current.x - pos.current.x) * lerp;
        pos.current.y += (target.current.y - pos.current.y) * lerp;
      }

      // place by left/top and keep the dot centered under the pointer
      dot.style.left = `${pos.current.x}px`;
      dot.style.top  = `${pos.current.y}px`;
      dot.style.transform = `translate(-50%, -50%) scale(${scaleRef.current})`;

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

    // ---------- Public API for emoji mode ----------
    const saveOnce = () => {
      if (savedRef.current) return;
      savedRef.current = {
        width: dot.style.width,
        height: dot.style.height,
        background: dot.style.background,
        backgroundImage: dot.style.backgroundImage,
        backgroundRepeat: dot.style.backgroundRepeat,
        backgroundPosition: dot.style.backgroundPosition,
        backgroundSize: dot.style.backgroundSize,
        border: dot.style.border,
        boxShadow: dot.style.boxShadow,
        opacity: dot.style.opacity,
        display: dot.style.display,
        color: dot.style.color,
        lineHeight: dot.style.lineHeight,
        zIndex: dot.style.zIndex,
        text: dot.textContent,
        dataEmoji: dot.getAttribute("data-emoji"),
      };
    };

    window.cursorSetEmoji = ({ char, src, size = 64 }) => {
      saveOnce();

      // Bring above overlays and show
      dot.style.zIndex = "99999";
      dot.style.opacity = "1";

      // Neutralize white dot visuals
      dot.style.border = "none";
      dot.style.boxShadow = "none";
      dot.style.background = "transparent";
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;

      if (src) {
        // PNG mode
        dot.removeAttribute("data-emoji");
        dot.textContent = "";
        dot.style.backgroundImage = `url("${src}")`;
        dot.style.backgroundRepeat = "no-repeat";
        dot.style.backgroundPosition = "center";
        dot.style.backgroundSize = "contain";
        dot.style.display = "block";
      } else {
        // Text emoji mode
        dot.style.backgroundImage = "none";
        dot.textContent = char ?? "❓";
        dot.style.display = "flex";
        (dot.style as any).alignItems = "center";
        (dot.style as any).justifyContent = "center";
        dot.style.color = "white";
        dot.style.lineHeight = "1";
        (dot.style as any).fontSize = `${Math.round(size * 0.82)}px`;
      }
    };

    window.cursorRestore = () => {
      if (!savedRef.current) return;
      const s = savedRef.current;
      dot.style.width = s.width ?? "";
      dot.style.height = s.height ?? "";
      dot.style.background = s.background ?? "";
      dot.style.backgroundImage = s.backgroundImage ?? "";
      dot.style.backgroundRepeat = s.backgroundRepeat ?? "";
      dot.style.backgroundPosition = s.backgroundPosition ?? "";
      dot.style.backgroundSize = s.backgroundSize ?? "";
      dot.style.border = s.border ?? "";
      dot.style.boxShadow = s.boxShadow ?? "";
      dot.style.opacity = s.opacity ?? "";
      dot.style.display = s.display ?? "";
      dot.style.color = s.color ?? "";
      dot.style.lineHeight = s.lineHeight ?? "";
      dot.style.zIndex = s.zIndex ?? "";
      (dot.style as any).fontSize = "";

      if (s.dataEmoji) dot.setAttribute("data-emoji", s.dataEmoji);
      else dot.removeAttribute("data-emoji");
      dot.textContent = s.text ?? "";

      savedRef.current = null;
    };
    // ------------------------------------------------

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

      // Clean up API
      delete window.cursorSetEmoji;
      delete window.cursorRestore;
    };
  }, []);

  return <div id="dot-cursor" ref={dotRef} aria-hidden="true" />;
}
