import Image from "next/image";
import Section from "./section";
import { techIcons } from "@/lib/data";

function Row({
  reverse = false,
  speedSeconds = 60,
  startOffset = "0%",
}: {
  reverse?: boolean;
  speedSeconds?: number;
  startOffset?: string;
}) {
  const items = [...techIcons, ...techIcons, ...techIcons, ...techIcons]; // duplicate for seamless loop

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""}`}
      style={{
        ["--marquee-speed" as any]: `${speedSeconds}s`,
        ["--start-offset" as any]: startOffset,
      }}
    >
      <div className="marquee__inner">
        {items.map((t, i) => (
          <span key={`${t.label}-${i}`} className="logo-chip" aria-label={t.label} title={t.label}>
            <Image src={t.src} alt={t.label} width={50} height={50} className="logo-img" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
      <div className="space-y-4 my-10 mt-20">
        <Row speedSeconds={60} startOffset="0%" />
        <div className="my-20"></div>
        <Row reverse speedSeconds={120} startOffset="-35%" /> {/* <- staggered start */}
      </div>
  );
}
