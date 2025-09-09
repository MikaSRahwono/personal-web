import Hero from "./components/hero";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Socials from "./components/socials";
import Stack from "./components/stack";
import Footer from "./components/footer";
import Organizations from "./components/organizations";
import Changelog from "./components/changelog";
import StickerTool from "./components/sticker-tool";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stack />
      <Experience />
      <Projects />
      <Organizations />
      <Changelog limit={3} heading="My Changelog" step={2} />;
      <Blogs />
      <Socials />
      <StickerTool />
      <Footer/>
    </main>
  );
}
