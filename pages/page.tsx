import Hero from "./components/hero";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Socials from "./components/socials";

export default function Page() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Blogs />
      <Socials />
      <footer className="container py-12 text-white/50 text-sm">
        © {new Date().getFullYear()} Mika. Built with Next.js, Tailwind, and Framer Motion.
      </footer>
    </main>
  );
}
