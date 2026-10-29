import { bi, type Bi } from "./lang";

/* ------------------------------------------------------------------
   AMIER — UI dictionary (EN/AR).
   Section-specific long-form content lives in data files; this file
   carries the chrome: nav, hero, stats, kickers, contact, footer.
   ------------------------------------------------------------------ */

export const BRAND = bi("AMIER", "أمير");

export const NAV = {
  label: bi("Main", "الرئيسية"),
  links: [
    { href: "#northstar", label: bi("North Star", "نجم الشمال") },
    { href: "#proof", label: bi("Proof Room", "غرفة الإثبات") },
    { href: "#rydo", label: bi("Rydo Case", "حالة Rydo") },
    { href: "#lab", label: bi("Decision Lab", "مختبر القرار") },
    { href: "#journey", label: bi("Where I'm Going", "إلى أين ذاهب") },
    { href: "#contact", label: bi("Contact", "تواصل") },
  ],
  cv: bi("CV", "السيرة"),
  clock: bi("CAI", "القاهرة"),
  menu: bi("Menu", "القائمة"),
  close: bi("Close", "إغلاق"),
  langToggle: bi("ع\u200E", "EN\u200F"),
  langAria: bi("Switch to Arabic", "التحويل إلى الإنجليزية"),
};

export const HERO = {
  eyebrow: bi("Portfolio ✱ 2026 — Cairo, Egypt · GMT+2", "معرض الأعمال ✱ 2026 — القاهرة، مصر · غرينتش+2"),
  name: bi("AMIER", "أمير"),
  h1a: bi(
    "Building at the intersection of",
    "أبني عند التقاطع بين",
  ),
  h1b: bi("Business, Software & AI.", "البيزنس والسوفتوير والذكاء الاصطناعي."),
  lede: bi(
    "I'm driven by the challenge of turning ideas into useful products, solving real problems, and learning how technology can create lasting value.",
    "أعشق تحدّي تحويل الأفكار إلى منتجات مفيدة، وحلّ مشكلات حقيقية، وتعلّم كيف تصنع التقنية قيمة تدوم.",
  ),
  who: bi(
    "I design and build for the web — 3D product experiences, full-stack platforms, AI tools. Twelve of my builds are live right now; this site is the long, honest version of who I am and where I'm going.",
    "أصمّم وأبني للويب — تجارب منتجات ثلاثية الأبعاد، منصات كاملة، وأدوات ذكاء اصطناعي. اثنا عشر بناءً من أعمالي تعمل الآن، وهذا الموقع هو النسخة الطويلة والصادقة ممّن أنا وإلى أين ذاهب.",
  ),
  ctaPrimary: bi("See the proof ↓", "شاهد الإثبات ↓"),
  ctaGhost: bi("Start a conversation", "ابدأ حديثًا"),
  ctaCv: bi("View CV", "السيرة الذاتية"),
  marquee: [
    bi("Available for hire — Remote · Worldwide", "متاح للعمل — عن بُعد · في أي مكان"),
    bi("14 public repositories", "14 مستودعًا عامًا"),
    bi("12 live deployments", "12 نشرًا مباشرًا"),
    bi("Next.js 15 ✱ React Three Fiber ✱ AI", "Next.js 15 ✱ React Three Fiber ✱ AI"),
    bi("Every number on this site is verifiable", "كل رقم في هذا الموقع قابل للتحقق"),
    bi("Reply within 24 hours", "أرد خلال 24 ساعة"),
  ],
};

export const STATS = {
  caption: bi(
    "Numbers over claims — everything I say about my work can be opened, run and checked.",
    "أرقام لا ادعاءات — كل ما أقوله عن شغلي يمكن فتحه وتشغيله ومراجعته.",
  ),
  items: [
    { n: 14, suffix: "", label: bi("Public repositories", "مستودعات عامة"), href: "https://github.com/Xerox1010555" },
    { n: 12, suffix: "", label: bi("Live deployments", "نشرات حيّة"), href: "#proof" },
    { n: 12, suffix: "", label: bi("Live links on this page", "روابط حيّة في الصفحة"), href: "#proof" },
  ],
  zeroTile: {
    n: "0",
    label: bi("invented numbers — every claim here is checked against reality", "أرقام مخترعة — وكل ادعاء هنا مُقارَن بالواقع"),
  },
};

export const SECTIONS = {
  northstar: {
    no: bi("№ 01 — The Founder's North Star", "№ 01 — نجم الطموح"),
    h2: bi("One core. Three disciplines in orbit.", "نواة واحدة. ثلاثة تخصّصات في مدار."),
    intro: bi(
      "My ambition lives where three fields meet. Choose an orbit — hover, click or tap — to see what I have actually built in each, and why each one matters to where I'm going.",
      "طموحي يسكن حيث تلتقي ثلاثة حقول. اختر مدارًا — بلمسة أو نقرة — لترى ما بنيتُه فعلًا في كل حقل، ولماذا يهمّني كلٌّ منها في مشواري.",
    ),
    coreLabel: bi("The core", "النواة"),
    coreHint: bi(
      "The core is my ambition — not a title I claim today. Each orbit is a discipline I practise on real projects.",
      "النواة طموحي — لا منصبٍ أدّعيه اليوم. كل مدار تخصّص أتمرّنه على مشاريع حقيقية.",
    ),
    fallbackHint: bi("Simplified companion view (convert 3D to orbit diagram)", "عرض مُبسّط مرافق (تحويل المجسّم إلى مخطط مداري)"),
  },
  proof: {
    no: bi("№ 02 — The Proof Room", "№ 02 — غرفة الإثبات"),
    h2: bi("Stories, not screenshots only.", "قصص، لا صور شاشة فقط."),
    intro: bi(
      "Uniform cards prove nothing. Each featured build opens a short story: the problem, the hardest part, the decision — then living proof you can open right now.",
      "الكروت المتطابقة لا تثبت شيئًا. كل مشروع مختار يفتح قصة قصيرة: المشكلة، الجانب الأصعب، القرار — ثم إثبات حيّ تفتحه الآن.",
    ),
    role: bi("My role", "دوري"),
    challenge: bi("The hardest part", "الأصعب"),
    decision: bi("A decision I made", "قرار اتخذته"),
    outcome: bi("The outcome", "النتيجة"),
    learned: bi("What I learned", "ما تعلّمته"),
    stack: bi("Built with", "بُني بـ"),
    live: bi("Live ↗", "مباشر ↗"),
    code: bi("Code ↗", "الكود ↗"),
    ledgerTitle: bi("The full ledger — all 12 live deployments", "السجل الكامل — كل النشرات الحيّة الـ 12"),
    ledgerNote: bi(
      "Every row is a real link you can open. Two more repositories (AIRA, Amier OS) are code-complete without public hosting.",
      "كل صف رابط حقيقي يمكنك فتحه. مستودعان إضافيان (AIRA، Amier OS) مكملان بالكود دون استضافة عامة.",
    ),
    open: bi("Visit", "زيارة"),
  },
  rydo: {
    no: bi("№ 03 — Flagship Case Study", "№ 03 — دراسة الحالة الرائدة"),
    chip: bi("Case study — source code reviewed here, not publicly deployed", "دراسة حالة — الكود مُراجَع هنا، غير منشور للعامة"),
  },
  lab: {
    no: bi("№ 04 — Decision Lab", "№ 04 — مختبر القرار"),
    h2: bi("How I think — not just what I ship.", "كيف أفكر — لا كيف أُسلّم فقط."),
    intro: bi(
      "Two real engineering decisions from the Rydo codebase, plus one labeled simulation. Pick an approach inside each case and watch the trade-offs react.",
      "قراران هندسيان حقيقيان من كود Rydo، ومحاكاة واحدة معنونة بوضوح. اختر النهج داخل كل حالة وشاهد المقايضات تتفاعل.",
    ),
    real: bi("REAL — implemented & verifiable", "حقيقي — مُنفّذ وقابل للتحقق"),
    sim: bi("SIMULATION — a scenario I reason about", "محاكاة — سيناريو أخوض فيه التفكير"),
    chosen: bi("My pick (verified in the code)", "خياري (مُتحقَّق منه في الكود)"),
    consider: bi("Considered, not chosen", "مُدرَس ولم يُختر"),
    learnedLabel: bi("What I learned", "ما تعلّمته"),
    testLabel: bi("How I would test it", "كيف سأختبره"),
    problemLabel: bi("The problem", "المشكلة"),
    constraintsLabel: bi("The constraints", "القيود"),
  },
  journey: {
    no: bi("№ 05 — Where I'm Going", "№ 05 — إلى أين ذاهب"),
    h2: bi("The ambition, stated plainly.", "الطموح، مُصرَّحًا بوضوح."),
    statement: bi(
      "My long-term goal is to become a leading entrepreneur at the meeting point of business, software engineering and artificial intelligence.",
      "هدفي طويل المدى: أن أصبح رائد أعمال مؤثّرًا عند نقطة التقاء البيزنس بهندسة السوفتوير والذكاء الاصطناعي.",
    ),
    disclaimer: bi("These are aspirational milestones — a direction, not a progress bar.", "هذه إنجازات طموحة مُستهدفة — مسار، لا مقياس تقدّم."),
    pillarsTitle: bi("Three pillars", "ثلاثة أعمدة"),
    journeyTitle: bi("The journey", "الرحلة"),
    nowTitle: bi("Right now — for me to keep honest", "الآن — أُحدّثه بنفسي بصدق"),
    editNote: bi("✎ my note to fill — intentionally left real-time", "✎ ملاحظة خاصة بي — تُملأ في حينه"),
  },
  signal: {
    no: bi("№ 06 — Human Signal", "№ 06 — إشارة إنسانية"),
    h2: bi("The person behind the commits.", "الإنسان خلف الإثباتات."),
    intro: bi(
      "Code is evidence, but character ships the products. A few things I can honestly say about how I work.",
      "الكود دليل، لكن الشخصية هي التي تُسلّم المنتجات. بضع نقاط أستطيع قولها بصدق عن طريقة عملي.",
    ),
    howTitle: bi("How I work", "طريقة عملي"),
    principleTitle: bi("A principle I try to keep", "مبدأ أحاول التمسك به"),
    servicesTitle: bi("What I do", "ما أفعله"),
    quoteEdit: bi("✎ my own words — I keep refining them", "✎ كلماتي — أواصل صقلها"),
  },
  opportunities: {
    no: bi("№ 07 — Opportunities", "№ 07 — الفرص"),
    h2: bi("Three doors — same person.", "ثلاثة أبواب — الشخص نفسه."),
    intro: bi(
      "Pick the door that fits you. The emphasis changes; the facts stay identical.",
      "اختر الباب الذي يناسبك. التركيز يختلف؛ الحقائق تظل واحدة.",
    ),
    skillsTitle: bi("What I can contribute — the stack", "ما أقدّمه — الأدوات"),
    bringTitle: bi("What I bring", "ما أقدّمه"),
    wantTitle: bi("What I hope to gain", "ما أأمل تعلّمه"),
    educationLabel: bi("Education", "التعليم"),
    educationValue: bi("[ ✎ to be completed by me — documents on request ]", "[ ✎ استكمال مني بالوقت المناسب — المستندات عند الطلب ]"),
    languagesLabel: bi("Languages", "اللغات"),
    languagesValue: bi("Arabic — native · English — professional working", "العربية — اللغة الأم · الإنجليزية — مستوى عمل تفاعلي"),
    rolesTitle: bi("Roles I'm looking for", "الأدوار المطلوبة"),
  },
  contact: {
    no: bi("№ 08 — Contact", "№ 08 — تواصل"),
    h2: bi("Ready when you are.", "جاهز عندما تكون جاهزًا."),
    copy: bi("Copy email", "انسخ الإيميل"),
    copied: bi("Copied ✓", "تم النسخ ✓"),
    availability: bi("Available for hire — Remote · Worldwide · Cairo time", "متاح للعمل — عن بُعد · أي مكان · توقيت القاهرة"),
    note: bi(
      "No forms, no trackers — your message goes straight to my inbox. I reply within 24 hours.",
      "بدون نماذج ولا تتبّع — رسالتك تصل بريدي مباشرة. أرد خلال 24 ساعة.",
    ),
  },
  footer: {
    honesty: bi(
      "This site sets no cookies and runs no trackers. If you find any number here that isn't verifiable, email me — I'll fix it.",
      "هذا الموقع لا يضع كوكيز ولا يتتبّعك. إن وجدت أي رقم لا يمكن التحقق منه، ابعتلي — أصلحه.",
    ),
    lang: bi("Language", "اللغة"),
  },
  common: {
    caseStudy: bi("Case study on this page ↓", "دراسة الحالة في هذه الصفحة ↓"),
    repoOnly: bi("Open code ↗", "الكود ↗"),
    comingSoon: bi("📵 ", "📵 "),
  },
};

export type Dictionary = typeof NAV;
