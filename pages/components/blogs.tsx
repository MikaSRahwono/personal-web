import Section from "./section";
import { blogs } from "@/lib/data";

export default function Blogs() {
  return (
    <Section id="blogs" title="Latest Blogs on Medium">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((b) => (
          <li key={b.href} className="card hover:shadow-glow transition animate-rise-in">
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-lg font-medium"
            >
              {b.title}
            </a>
            <p className="text-white/70 text-sm mt-1">{b.desc}</p>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <a
          className="btn"
          href="https://medium.com/@mikasuryof"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all on Medium
        </a>
      </div>
    </Section>
  );
}
