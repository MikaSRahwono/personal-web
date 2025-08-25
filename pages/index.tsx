import Hero from "./components/hero";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Socials from "./components/socials";
import Stack from "./components/stack";
import Footer from "./components/footer";
import Organizations from "./components/organizations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stack />
      <Experience />
      <Projects />
      <Organizations />
      <Blogs />
      <Socials />
      <Footer/>
    </main>
  );
}
