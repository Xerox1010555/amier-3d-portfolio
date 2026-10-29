import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NorthStar from "@/components/NorthStar";
import ProofRoom from "@/components/ProofRoom";
import RydoCase from "@/components/RydoCase";
import DecisionLab from "@/components/DecisionLab";
import Journey from "@/components/Journey";
import Signal from "@/components/Signal";
import Opportunities from "@/components/Opportunities";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import { LangProvider } from "@/i18n/lang";
import { LINK } from "@/data/projects";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <LangProvider>
      <a className="skip" href="#northstar">Skip to content ↓</a>
      <Cursor />
      <Reveal />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <NorthStar />
        <ProofRoom />
        <RydoCase />
        <DecisionLab />
        <Journey />
        <Signal />
        <Opportunities />
        <Contact />
      </main>
      <footer className="site-foot">
        <div className="wrap">
          <div className="foot">
            <div>
              <div className="bigmark">
                AMIER<span className="ast">✱</span>
              </div>
              <div className="foot-links">
                <a href={LINK.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={LINK.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
                <a href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
                <a href="/cv">CV ↗</a>
                <a href="#proof">Proof Room ↗</a>
              </div>
            </div>
            <p className="foot-honesty">
              No cookies, no trackers. Every number on this site is verifiable — if you find one
              that isn't, email <a href={`mailto:${LINK.email}`}>{LINK.email}</a>.
            </p>
            <span className="foot-year">© {year} AMIER ✱ Cairo</span>
          </div>
        </div>
      </footer>
    </LangProvider>
  );
}
