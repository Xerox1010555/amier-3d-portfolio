import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import { LINK } from "@/data/projects";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <>
      <Cursor />
      <Reveal />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer>
        <div className="wrap foot">
          <div className="madeby">
            © {year} — designed &amp; engineered by <span>AMIER</span> · Next.js + React Three Fiber
          </div>
          <div className="foot-links">
            <a href={LINK.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={LINK.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a href={LINK.cv} target="_blank" rel="noreferrer">CV ↓</a>
          </div>
        </div>
      </footer>
    </>
  );
}
