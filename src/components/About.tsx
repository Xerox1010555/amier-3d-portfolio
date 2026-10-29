"use client";

import { LINK } from "@/data/projects";

const SERVICES = [
  {
    title: "3D & Immersive Web",
    desc: "Three.js / React Three Fiber scenes, configurators and showrooms that run in the browser.",
  },
  {
    title: "Full-Stack Platforms",
    desc: "Next.js front-ends + secure Node/Express APIs, auth, databases and admin consoles.",
  },
  {
    title: "AI Products",
    desc: "AI-assisted apps with LLM tool-calling, voice interaction and real user accounts.",
  },
  {
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
          <span className="tag">AMIER · CAI</span>
        </div>

        <div className="about-copy">
          <span className="kicker reveal">About the author</span>
          <h2 className="section-title reveal">Printed in code, shipped to production.</h2>
          <p className="reveal">
            I&apos;m <strong>Amier</strong> — a full-stack developer who treats every product
            like an edition: designed once, properly, then exported to the real web. I obsess
            over clean, maintainable code and architecture that scales gracefully as the
            product grows.
          </p>
          <p className="reveal">
            Front end: <strong>pixel-perfect, responsive interfaces</strong> with attention
            to typography, motion and accessibility. Back end: <strong>secure APIs, robust
            systems and well-modeled databases</strong> that hold up under real traffic.
          </p>

          <div className="services reveal">
            {SERVICES.map((s, i) => (
              <div className="service" key={s.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{s.title}</b>
                  <span>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cv reveal">
            <a className="btn btn-primary" href={LINK.cv} target="_blank" rel="noreferrer">CV ↓</a>
            <a className="btn" href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
