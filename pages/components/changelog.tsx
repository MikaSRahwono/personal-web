import { useEffect, useMemo, useState } from "react";
import { Copy, Link as LinkIcon, Filter, ChevronDown } from "lucide-react";
import { changelog, CHANGELOG_CATS, type ChangelogCat } from "@/lib/data";

type Props = {
  /** Initial number of releases to show (e.g., 3). If omitted, shows all and hides controls. */
  limit?: number;
  /** Hide the filter pills (useful for the compact home preview). */
  hideFilters?: boolean;
  /** Optional heading override. */
  heading?: string;
  /** Step size for Show more/less (default 2). */
  step?: number;
  /** Minimum visible releases (default 3). */
  minVisible?: number;
};

const idFromVersion = (v: string) => "v" + v.replace(/^v/i, "").replace(/\./g, "-");

function SectionDisclosure({
  label,
  items,
  defaultOpen = false,
}: {
  label: string;
  items?: string[];
  defaultOpen?: boolean;
}) {
  if (!items || items.length === 0) return null;
  return (
    <details className="disclosure" {...(defaultOpen ? { open: true } : {})}>
      <summary className="disclosure-summary">
        <span className="disclosure-title">{label}</span>
        <span className="disclosure-right">
          <span className="disclosure-count">{items.length}</span>
          <ChevronDown size={16} className="disclosure-chevron" aria-hidden="true" />
        </span>
      </summary>
      <ul className="disclosure-list">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </details>
  );
}

export default function Changelog({
  limit,
  hideFilters = false,
  heading,
  step = 2,
  minVisible = 3,
}: Props) {
  const versionsSorted = useMemo(
    () =>
      [...changelog].sort((a, b) =>
        a.date < b.date ? 1 : a.date > b.date ? -1 : a.version < b.version ? 1 : -1
      ),
    []
  );

  const total = versionsSorted.length;

  // If limit provided, start there; otherwise show all (and hide controls).
  const initial = typeof limit === "number" ? Math.min(limit, total) : total;
  const [visible, setVisible] = useState<number>(initial);

  const versions = versionsSorted.slice(0, visible);
  const hasControls = typeof limit === "number"; // only show controls when using preview mode
  const canLess = hasControls && visible > Math.min(minVisible, total);
  const canMore = hasControls && visible < total;

  const [active, setActive] = useState<Record<ChangelogCat, boolean>>(
    () => Object.fromEntries(CHANGELOG_CATS.map((c) => [c, true])) as Record<ChangelogCat, boolean>
  );

  // Scroll to anchor on load
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const anyOff = CHANGELOG_CATS.some((c) => !active[c]);
  const toggle = (c: ChangelogCat) => setActive((s) => ({ ...s, [c]: !s[c] }));

  const onMore = () => setVisible((v) => Math.min(v + step, total));
  const onLess = () => setVisible((v) => Math.max(v - step, Math.min(minVisible, total)));

  return (
    <section id="changelog" className="container py-12 md:py-20">
      {/* Header + (optional) Filters */}
      <div className="mb-6 flex items-center gap-3">
        <h2 className="section-title flex items-center gap-2">
          <span className="h-7 w-1.5 rounded inline-block" style={{ background: "var(--sky)" }} />
          {heading ?? "Me-as-a-Product: Changelog"}
        </h2>
        {!hideFilters && (
          <span className="ml-auto inline-flex items-center gap-2 text-white/70 text-sm">
            <Filter size={16} /> Filters
          </span>
        )}
      </div>

      {!hideFilters && (
        <div className="mb-6 flex flex-wrap gap-2">
          {CHANGELOG_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className="px-3 py-1.5 rounded-full text-sm border transition"
              style={{
                background: active[cat]
                  ? "color-mix(in srgb, var(--sky) 15%, transparent)"
                  : "transparent",
                borderColor: "color-mix(in srgb, var(--sky) 30%, transparent)",
                color: active[cat] ? "var(--sky)" : "rgba(255,255,255,0.7)",
              }}
              aria-pressed={active[cat]}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Timeline */}
      <ol className="relative border-l border-white/10">
        {versions.map((v) => {
          const id = idFromVersion(v.version);

          // Which category blocks to show inside the card
          const categoriesToShow = CHANGELOG_CATS.filter((c) => {
            const hasItems = (v.categories[c]?.length ?? 0) > 0;
            return anyOff ? active[c] && hasItems : hasItems;
          });

          return (
            <li key={v.version} id={id} className="ml-6 mb-8 scroll-mt-24">
              {/* timeline dot */}
              <span
                className="absolute -left-[7px] top-2 w-3 h-3 rounded-full"
                style={{
                  background: "var(--sky)",
                  boxShadow: "0 0 0 4px color-mix(in srgb, var(--sky) 20%, transparent)",
                }}
              />

              {/* Always render the release card */}
              <div className="card">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">{v.version}</h3>
                  <time className="text-white/60 text-sm" dateTime={v.date}>
                    {new Date(v.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </time>
                  <div className="ml-auto flex items-center gap-2">
                    <a
                      className="btn"
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        history.replaceState(null, "", `#${id}`);
                        document.getElementById(id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      aria-label={`Anchor to ${v.version}`}
                    >
                      <LinkIcon size={16} /> Link
                    </a>
                    <button
                      className="btn"
                      onClick={async () => {
                        const url = `${location.origin}${location.pathname}#${id}`;
                        try {
                          await navigator.clipboard.writeText(url);
                        } catch {
                          prompt("Copy link:", url);
                        }
                      }}
                      aria-label={`Copy link to ${v.version}`}
                    >
                      <Copy size={16} /> Copy
                    </button>
                  </div>
                </div>

                <p className="mt-2 text-white/85">{v.summary}</p>

                {/* Category blocks (cardless). Omit entirely if no category matches current filters */}
                {categoriesToShow.map((c) => (
                  <SectionDisclosure
                    key={c}
                    label={c}
                    items={v.categories[c]}
                    defaultOpen={false}
                  />
                ))}
              </div>

              {/* subtle divider */}
              <div className="mt-6 h-px bg-white/10" />
            </li>
          );
        })}
      </ol>

      {/* Show less / Show more (centered) */}
        {hasControls && (canLess || canMore) && (
        <div className="mt-8 flex justify-center gap-3">
            {canLess && (
            <button className="btn" onClick={onLess} aria-label="Show fewer releases">
                Show less
            </button>
            )}
            {canMore && (
            <button className="btn-cta" onClick={onMore} aria-label="Show more releases">
                Show more
            </button>
            )}
        </div>
        )}

    </section>
  );
}
