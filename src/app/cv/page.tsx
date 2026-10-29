import type { Metadata } from "next";
import CvPrintButton from "@/components/CvPrintButton";
import { LEDGER } from "@/data/stories";

export const metadata: Metadata = {
  title: "AMIER — CV",
  description:
    "Curriculum vitae of Amier — full-stack developer (3D · AI). 14 public repositories, 12 live deployments. Generated from verified facts only.",
};

/* An honest CV rendered as a page: every claim links back to live proof,
   and the browser's print-to-PDF keeps the file always in sync. */

const SKILLS: { group: string; items: string }[] = [
  { group: "Front-End", items: "Next.js 15 · React 19 · TypeScript · Three.js / React Three Fiber · Astro · CSS systems · Responsive & a11y" },
  { group: "Back-End & APIs", items: "FastAPI · Node.js · Express 5 · REST · JWT auth · WebSocket · pytest / Vitest / Playwright" },
  { group: "Data & Delivery", items: "PostgreSQL · SQLite · Prisma · Supabase · Git & GitHub · Vercel · PWA" },
];

const WORK: { name: string; line: string; url: string }[] = [
  { name: "AMIER CARS — 3D Showroom", line: "On-demand Draco-streamed car inspection", url: "https://amier-cars-3d-showroom.vercel.app" },
  { name: "CarX Atelier", line: "3D configurator with real order book, JWT admin, API tests", url: "https://carx-3d-configurator.vercel.app" },
  { name: "Brand Villas New Cairo", line: "Procedurally generated walkable villa (3D)", url: "https://brand-villas-3d.vercel.app" },
  { name: "Oyster & Co.", line: "Next.js boutique platform (i18n, Prisma, admin)", url: "https://oyster-co.vercel.app" },
  { name: "Crown & Co", line: "Single-file boutique: live 3D hero, full RTL, multi-currency", url: "https://crown-watch-boutique.vercel.app" },
  { name: "Emo — AI English Tutor", line: "AI voice lessons with real accounts and streaks", url: "https://emo-ai-english-tutor.vercel.app" },
];

export default function CvPage() {
  return (
    <main className="cv">
      <div className="cv-sheet">
        <header className="cv-head">
          <div>
            <h1>AMIER<span className="ast">✱</span></h1>
            <p className="cv-role">Full-Stack Developer — 3D · AI · Web Platforms</p>
            <p className="cv-contact">
              abddo4443@gmail.com · +20 100 865 5235 · @Amier1t5 · github.com/Xerox1010555
              <br />amier-3d-portfolio.vercel.app · Cairo, Egypt (GMT+2) · Remote — Worldwide
            </p>
          </div>
          <CvPrintButton />
        </header>

        <section>
          <h2>Profile</h2>
          <p>
            Developer building at the intersection of business, software engineering and AI.
            Self-directed portfolio program (2025–2026): <strong>14 public repositories</strong> and
            <strong> 12 live deployments</strong>, all verifiable via the links in this document.
            Comfortable end-to-end: design, build, test, deploy, harden (CSP), monitor.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <dl className="cv-skills">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Selected live work</h2>
          <ul className="cv-work">
            {WORK.map((w) => (
              <li key={w.name}>
                <strong>{w.name}</strong> — {w.line} · <a href={w.url}>{w.url.replace("https://", "")}</a>
              </li>
            ))}
          </ul>
          <p className="mini">
            Full ledger of all 12 live deployments: amier-3d-portfolio.vercel.app/#proof
          </p>
        </section>

        <section>
          <h2>Flagship project — Rydo Egypt (ride-hailing platform)</h2>
          <ul>
            <li>Built the full system solo: product documents, FastAPI backend, rider + driver web apps, admin dashboard, Android app.</li>
            <li>Backend: ride state machine with SELECT … FOR UPDATE row locking, locked-fare pricing with automatic &gt;15% variance review flags, OTP + JWT refresh rotation; 12 pytest suites (auth, full lifecycle, pricing) running on SQLite + fakeredis.</li>
            <li>Web client: booking flow, live ride tracking over WebSocket (JWT + backoff reconnect), driver dashboard; 14 unit tests passing at final audit.</li>
            <li>Honest status: case study — codebase complete and audit-reviewed; no public deployment yet.</li>
          </ul>
        </section>

        <section>
          <h2>Experience</h2>
          <p>
            <strong>Independent builder — self-directed portfolio program</strong> (2025–present):
            designed, built, launched and security-hardened 12 public web products across 3D,
            commerce, AI and utility categories; documented audits, tests and deployment records.
          </p>
        </section>

        <section className="cv-meta">
          <h2>Education</h2>
          <p className="mini">[ to be completed by owner — documents available on request ]</p>
          <h2>Languages</h2>
          <p>Arabic — native · English — professional working</p>
        </section>

        <section dir="rtl" lang="ar" className="cv-ar">
          <h2 dir="auto">ملخص عربي</h2>
          <p>
            مطوّر ويب كامل يعمل عند تقاطع البيزنس والسوفتوير والذكاء الاصطناعي.
            برنامج تعلّم ذاتي (2025–): 14 مستودعًا عامًا و12 نشرًا حيًّا قابلين للتحقق من الروابط أعلاه.
            يعمل من الفكرة حتى الإنتاج: تصميم، بناء، اختبار، نشر، تقوية أمنية (CSP)، ومراقبة.
          </p>
          <p>
            المشروع الرائد — Rydo مصر: بنى النظام كاملًا منفردًا (باكند FastAPI مع آلات حالات وقفل صفوف وسعر مقفول،
            وتطبيقا ويب للراكب والسائق، ولوحة إدارة، وتطبيق أندرويد؛ 12 اختبار باكند و14 اختبار ويب ناجحة وقت التدقيق).
            الحالة بصدق: دراسة حالة مكتملة الكود دون إطلاق عام.
          </p>
          <p>اللغات: العربية — اللغة الأم · الإنجليزية — مستوى عمل تفاعلي.</p>
        </section>

        <footer className="cv-foot">
          <p className="mini">
            All claims verifiable at the linked portfolio · CV generated from verified facts · 2026-10
          </p>
        </footer>
      </div>
    </main>
  );
}
