import { PropsWithChildren } from "react";

export default function Section({
  id,
  title,
  children,
}: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="container py-12 md:py-20">
      <h2 className="section-title mb-6 flex items-center gap-3 animate-rise-in">
        <span className="h-7 w-1.5 rounded bg-sky inline-block" /> {title}
      </h2>
      <div className="animate-fade-in">{children}</div>
    </section>
  );
}
