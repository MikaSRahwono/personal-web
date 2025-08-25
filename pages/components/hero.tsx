import Image from "next/image";

export default function Hero() {
  return (
    <header
      className="container pt-12 pb-6 md:pt-16 md:pb-8"
      style={{
        background: `
          radial-gradient(60% 60% at 50% 0%, rgba(78,143,223,0.15) 0%, rgba(12,24,48,0.9) 40%, var(--ink) 100%),
          linear-gradient(180deg, var(--navy) 0%, var(--ink) 100%)
        `
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] items-center gap-6 md:gap-10">
        <div className="animate-rise-in">
          <span className="text-xs font-medium text-white/60">Hello, I’m</span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-1">
            Mika Suryofakhri Rahwono
          </h1>
          <p className="mt-3 text-white/80 md:text-lg">
            DevOps & Platform Engineering | Automating Infra · Optimizing Cloud Cost · Enabling Reliable Systems
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-cta" href="#projects">See Projects</a>
            <a className="btn" href="#experience">Experience</a>
            <a className="btn" href="#blogs">Blogs</a>
            <a 
            className="btn" 
            href="https://drive.google.com/file/d/1-VKZqPfJSpG00ZoXmOUvuyPOVve5eHGV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">Resume 🗒️</a>
          </div>
        </div>
      </div>
    </header>
  );
}
