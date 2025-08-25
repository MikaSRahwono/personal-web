import Image from "next/image";
import Section from "./section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="grid gap-6">
        {experiences.map((e) => (
          <div key={`${e.company}-${e.role}`} className="card flex flex-col md:flex-row items-center gap-5 animate-pop-in">
            <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={e.logo}
                alt={`${e.company} logo`}
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">
                {e.role} — {e.company}
              </h3>
              <p className="text-white/70 text-sm">
                {e.period} • {e.location}
              </p>
              <p className="text-white/80">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
