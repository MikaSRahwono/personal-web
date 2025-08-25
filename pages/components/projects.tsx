import Image from "next/image";
import Section from "./section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Project & Portfolio">
      <div className="grid gap-6">
        {projects.map((p) => (
          <div key={p.title} className="card grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
              <Image
                src={p.image}
                alt={`${p.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/80 text-sm">Team: {p.team}</p>
              <p className="text-white/80">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded border"
                    style={{
                      background: "color-mix(in srgb, var(--sky) 15%, transparent)",
                      color: "var(--sky)",
                      borderColor: "color-mix(in srgb, var(--sky) 30%, transparent)"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <a
            className="btn"
            href="https://drive.google.com/file/d/1YN9JzCCEUSotWTI2kFHB7sJwno9-fIJk/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all Projects
          </a>
        </div>
      </div>
    </Section>
  );
}
