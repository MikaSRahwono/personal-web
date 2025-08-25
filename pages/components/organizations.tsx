import Image from "next/image";
import Section from "./section";
import { organizations } from "@/lib/data";

export default function Organizations() {
  return (
    <Section id="organizations" title="Organizational Experience">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {organizations.map((item) => (
          <li key={`${item.org}-${item.period}`} className="card animate-fade-in">
            <div className="flex gap-3 overflow-x-auto rounded-xl border border-white/10 p-2 scrollbar-thin scrollbar-thumb-sky/30 scrollbar-track-transparent">
              {item.photos.map((photo, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-48 h-32 md:w-60 md:h-40 rounded-lg overflow-hidden"
                >
                  <Image
                    src={photo}
                    alt={`${item.org} photo ${i + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-semibold">{item.role} — {item.org}</h3>
              <p className="text-white/60 text-sm">{item.period}</p>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
