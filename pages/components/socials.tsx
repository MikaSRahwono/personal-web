import Section from "./section";
import { socials } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Socials() {
  return (
    <Section id="contact" title="Connect">
      <div className="card flex flex-wrap items-center gap-3 animate-pop-in">
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="btn">
            {s.label} <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </Section>
  );
}
