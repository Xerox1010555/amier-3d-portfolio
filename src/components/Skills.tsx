"use client";

const CARDS = [
  {
    num: "01",
    title: "Front-End Engineering",
    desc: "Pixel-perfect, accessible interfaces with motion that serves the story — not the other way around.",
    chips: ["Next.js 15", "React 19", "TypeScript", "Three.js / R3F", "Astro", "Lit", "CSS systems", "Responsive & a11y"],
  },
  {
    num: "02",
    title: "Back-End & APIs",
    desc: "Secure, well-documented services with real auth, validation and test coverage — built to be trusted.",
    chips: ["Node.js", "Express 5", "REST APIs", "JWT auth", "System architecture", "Prisma", "E2E (Playwright)", "Vitest"],
  },
  {
    num: "03",
    title: "Databases & Delivery",
    desc: "Data modeled for how the product actually grows, shipped with zero-drama pipelines.",
    chips: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Git & GitHub", "Vercel", "PWA offline", "Supabase"],
  },
];

export default function Skills() {
  return (
    <section className="skills wrap" id="skills">
      <span className="kicker reveal">Toolbox</span>
      <h2 className="section-title reveal" style={{ marginTop: 12 }}>
        The stack I build on
      </h2>
      <p className="section-sub reveal" style={{ marginTop: 12 }}>
        Chosen for reliability and joy of use — every one of these has shipped something real above.
      </p>

      <div className="skills-grid">
        {CARDS.map((c, i) => (
          <div className="skill-card reveal" key={c.num} style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="num">{c.num}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="chips">
              {c.chips.map((chip) => (
                <span className="chip" key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
