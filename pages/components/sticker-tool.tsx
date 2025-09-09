"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import NextImage from "next/image";

type EmojiOption = { id: string; label: string; src?: string; char?: string };
type Sticker = { id: string; x: number; y: number; size: number; option: EmojiOption };

const DEFAULT_EMOJIS: EmojiOption[] = [
  { id: "sparkles", label: "Sparkles", char: "✨" },
  { id: "fire",     label: "Fire",     char: "🔥" },
  { id: "party",    label: "Party",    char: "🎉" },
  { id: "heart",    label: "Heart",    char: "❤️" },
  { id: "thumbs",   label: "Thumbs",   char: "👍" },
  { id: "star",     label: "Star",     char: "⭐️" },
];

export default function StickerTool({
  options = DEFAULT_EMOJIS,
  minSize = 24,
  maxSize = 160,
  startSize = 64,
  step = 8, // how much + / - changes size
}: {
  options?: EmojiOption[];
  minSize?: number;
  maxSize?: number;
  startSize?: number;
  step?: number;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [picked, setPicked] = useState<EmojiOption | null>(null);
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // current follower size (pre-place scale)
  const cursorSizeRef = useRef<number>(startSize);

  const emojiOptions = useMemo(() => options.slice(0, 6), [options]);

  const clamp = (v: number) => Math.max(minSize, Math.min(maxSize, v));

  const applyCursorSkin = (opt: EmojiOption, size: number) => {
    window.cursorSetEmoji?.({ char: opt.char, src: opt.src, size });
  };
  const restoreCursorSkin = () => window.cursorRestore?.();

  // Place a sticker at the exact dot-cursor position/size
  const overlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!placing || !picked) return;
    const target = e.target as HTMLElement;
    if (panelRef.current?.contains(target)) return;
    if (btnRef.current?.contains(target)) return;

    // Use the dot's on-screen rect to compute center in PAGE coords + visual size
    const dot = document.getElementById("dot-cursor") as HTMLElement | null;

    let x = e.pageX;
    let y = e.pageY;
    let size = clamp(cursorSizeRef.current);

    if (dot) {
      const r = dot.getBoundingClientRect();
      x = r.left + r.width / 2 + window.scrollX;
      y = r.top  + r.height / 2 + window.scrollY;
      size = clamp(Math.round(r.width) * step / 5);
    }

    setStickers((prev) => [
      ...prev,
      {
        id: `s_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        x,
        y,
        size,
        option: picked!,
      },
    ]);
    setSelectedId(null);
  };

  // Keyboard: Esc exits; +/- either adjusts follower size (when placing) or selected sticker
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // ignore browser zoom combos
      if (e.ctrlKey || e.metaKey) return;

      if (e.key === "Escape") {
        setPlacing(false);
        setPicked(null);
        setOpen(false);
        restoreCursorSkin();
        return;
      }

      // pre-placement scaling
      if (placing && picked && (e.key === "+" || e.key === "=" || e.key === "-" || e.key === "_")) {
        e.preventDefault();
        const dir = e.key === "+" || e.key === "=" ? +1 : -1;
        const next = clamp(cursorSizeRef.current + dir * step);
        cursorSizeRef.current = next;
        applyCursorSkin(picked, next);
        return;
      }

      // post-placement scaling (selected sticker)
      if (selectedId && (e.key === "+" || e.key === "=" || e.key === "-" || e.key === "_")) {
        e.preventDefault();
        const delta = (e.key === "+" || e.key === "=") ? +step : -step;
        setStickers((prev) =>
          prev.map((s) =>
            s.id === selectedId ? { ...s, size: clamp(s.size + delta) } : s
          )
        );
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [placing, picked, selectedId, step, minSize, maxSize]);

  // Start placing with follower skinned to emoji at startSize
  const pickEmoji = (opt: EmojiOption) => {
    cursorSizeRef.current = clamp(startSize);
    setPicked(opt);
    setPlacing(true);
    setOpen(false);
    setSelectedId(null);
    applyCursorSkin(opt, cursorSizeRef.current);
  };

  const scaleSticker = (id: string, delta: number) => {
    setStickers((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, size: clamp(s.size + delta) } : s
      )
    );
  };

  return (
    <>
      {/* Stickers (absolute — they scroll with the page) */}
      <div className="absolute left-0 top-0 w-full h-0 z-[9000] pointer-events-none" aria-hidden="true">
        {stickers.map((s) => (
          <div
            key={s.id}
            className="absolute pointer-events-auto"
            style={{ left: s.x, top: s.y, transform: "translate(-50%, -50%)" }}
            onClick={(e) => { e.stopPropagation(); setSelectedId((cur) => (cur === s.id ? null : s.id)); }}
          >
            {s.option.src ? (
              <NextImage src={s.option.src} alt={s.option.label} width={s.size} height={s.size} draggable={false} className="select-none" />
            ) : (
              <div className="select-none" style={{ fontSize: s.size * 0.8, lineHeight: 1 }}>
                {s.option.char}
              </div>
            )}
            {selectedId === s.id && (
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-1">
                <button
                  className="rounded-md bg-black/70 text-white px-2 py-1 text-xs border border-white/15 hover:bg-black/80"
                  onClick={(e) => { e.stopPropagation(); scaleSticker(s.id, -step); }}
                >–</button>
                <button
                  className="rounded-md bg-black/70 text-white px-2 py-1 text-xs border border-white/15 hover:bg-black/80"
                  onClick={(e) => { e.stopPropagation(); scaleSticker(s.id, +step); }}
                >+</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Placement overlay — do NOT hide the cursor */}
      {placing && picked && (
        <div className="fixed inset-0 z-[9500]" onClick={overlayClick} aria-label="Sticker placement overlay" />
      )}

      {/* Floating button + popover (desktop only) */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-[9700]">
        {open && (
          <div
            ref={panelRef}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#0f1629]/95 border border-white/10 rounded-2xl p-3 shadow-xl backdrop-blur-md min-w-[320px] max-w-[95vw]"
          >
            <div className="grid grid-cols-6 gap-2 w-max mx-auto">
              {emojiOptions.map((opt) => (
                <button
                  key={opt.id}
                  className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                  onClick={() => pickEmoji(opt)}
                  title={opt.label}
                >
                  {opt.src ? (
                    <NextImage src={opt.src} alt={opt.label} width={28} height={28} draggable={false} />
                  ) : (
                    <span className="text-xl">{opt.char}</span>
                  )}
                </button>
              ))}
            </div>
            <div className="text-[11px] text-white/60 mt-2 text-center">
              Pick an emoji, then <b>click</b> to place.<br />
              Use <kbd>+</kbd>/<kbd>-</kbd> to scale <i>before</i> placing. Press <kbd>Esc</kbd> to exit.
            </div>
          </div>
        )}

        <button
          ref={btnRef}
          className="h-14 w-14 rounded-full bg-[var(--sky)]/40 text-black shadow-lg hover:scale-105 active:scale-95 transition flex items-center justify-center border border-white/10"
          onClick={() => {
            if (placing) {
              setPlacing(false);
              setPicked(null);
              setOpen(false);
              restoreCursorSkin();
            } else {
              setOpen((o) => !o);
            }
          }}
          aria-label={placing ? "Exit sticker mode" : "Open sticker picker"}
          title={placing ? "Exit sticker mode" : "Sticker picker"}
        >
          <span className="text-2xl">{placing ? "❌" : "😊"}</span>
        </button>
      </div>
    </>
  );
}
