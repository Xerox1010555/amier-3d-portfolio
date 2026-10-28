"use client";

import { LINK } from "@/data/projects";

const SERVICES = [
  {
    ic: "◈",
    title: "3D & Immersive Web",
    desc: "Three.js / React Three Fiber scenes, configurators and showrooms that run in the browser.",
  },
  {
    ic: "▣",
    title: "Full-Stack Platforms",
    desc: "Next.js front-ends + secure Node/Express APIs, auth, databases and admin consoles.",
  },
  {
    ic: "◭",
    title: "AI Products",
    desc: "AI-assisted apps with LLM tool-calling, voice interaction and real user accounts.",
  },
  {
    ic: "⟡",
    title: "End-to-End Delivery",
    desc: "From idea to production: design, build, test, deploy and monitor on Vercel.",
  },
];

export default function About() {
  return (
    <section className="about wrap" id="about">
      <div className="about-grid">
        <div className="about-photo reveal">
          <img src="/amier.jpg" alt="Amier — Full-Stack Web Developer" />
          <span className="tag">AMIER · REMOTE · WORLDWIDE</span>
        </div>

        <div className="about-copy">
          <span className="kicker reveal">About me</span>
          <h2 className="section-title reveal">The person behind the pixels</h2>
          <p className="reveal">
            I&apos;m <strong>Amier</strong>, a full-stack web developer passionate about
            transforming ideas into polished, production-ready digital products. I obsess over
            clean, maintainable code and architecture that scales gracefully as your product grows.
          </p>
          <p className="reveal">
            On the front end, I build <strong>pixel-perfect, responsive interfaces</strong> with
            meticulous attention to typography, motion and accessibility. On the back end, I
            engineer <strong>secure APIs, robust systems and well-modeled databases</strong> that
            hold up under real traffic.
          </p>

          <div className="services">
            {SERVICES.map((s, i) => (
              <div className="service reveal" key={s.title} style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="ic">{s.ic}</span>
                <div>
                  <b>{s.title}</b>
                  <span>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cv reveal">
            <a className="btn btn-primary" href={LINK.cv} target="_blank" rel="noreferrer">Download my CV ↓</a>
            <a className="btn" href={LINK.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
