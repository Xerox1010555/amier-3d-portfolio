import { bi, type Bi } from "@/i18n/lang";

/* ------------------------------------------------------------------
   BEYOND THE BUILD — narrative data (EN/AR).
   Everything here paraphrases the project's own documented features,
   live links and public repositories. No invented metrics anywhere.
   ------------------------------------------------------------------ */

/* ---------------- North Star orbits ---------------- */

export interface Orbit {
  id: "business" | "software" | "ai";
  name: Bi;
  line: Bi;
  vision: Bi;
  links: { title: Bi; href: string; note?: Bi; live: boolean }[];
}

export const ORBITS: Orbit[] = [
  {
    id: "business",
    name: bi("Business", "البيزنس"),
    line: bi(
      "Where value actually comes from: customers, trust, pricing, and the nerve to ship.",
      "من أين تأتي القيمة فعلًا: العملاء، الثقة، التسعير، وجرأة التسليم.",
    ),
    vision: bi(
      "I watch how boutiques set expectations, how carts handle currencies, how an order book respects a buyer — because the software I build has to earn its keep.",
      "أراقب كيف تضع المتاجر توقعاتها، وكيف تمسك السِلة بالعملات، وكيف يحترم سجل الطلبات المشتري — لأن السوفتوير الذي أبنيه يجب أن يستحق وجدانه.",
    ),
    links: [
      { title: bi("Oyster & Co.", "أويستر آند كو"), href: "https://oyster-co.vercel.app", live: true, note: bi("Next.js boutique platform — i18n, collection, admin", "منصة متجر بـ Next.js — تعدد لغات، مجموعات، لوحة إدارة") },
      { title: bi("Crown & Co.", "كرون آند كو"), href: "https://crown-watch-boutique.vercel.app", live: true, note: bi("Multi-currency cart, full EN/AR RTL", "سلة متعددة العملات، وواجهة RTL كاملة") },
      { title: bi("CarX Atelier", "كاركس أتيليه"), href: "https://carx-3d-configurator.vercel.app", live: true, note: bi("Configurator with a real order book + checkout", "مُكوِّن بسجل طلبات حقيقي ودفع") },
    ],
  },
  {
    id: "software",
    name: bi("Software Engineering", "هندسة السوفتوير"),
    line: bi(
      "Turning ideas into reliable, maintainable, useful products.",
      "تحويل الأفكار إلى منتجات موثوقة وقابلة للصيانة ومفيدة.",
    ),
    vision: bi(
      "This is the layer I build every day — deployable, hardened, honest code. Twelve public deployments are the proof, not adjectives.",
      "هذه الطبقة التي أبنيها كل يوم — كود قابل للتشغيل ومُحصّن وصادق. واثنا عشر نشرًا حيًّا هي الدليل، لا الصفات.",
    ),
    links: [
      { title: bi("AMIER CARS — 3D Showroom", "أمير كارز — صالة عرض 3D"), href: "https://amier-cars-3d-showroom.vercel.app", live: true, note: bi("Seven cars, hood-to-cabin interaction, on-demand Draco streaming", "سبع عربيات، تفاعل من الكابوت إلى الكابينة، وبث Draco حسب الطلب") },
      { title: bi("BRAND — Villas New Cairo", "براند — فيلات القاهرة الجديدة"), href: "https://brand-villas-3d.vercel.app", live: true, note: bi("A villa generated procedurally in the browser — walk it", "فيلا مُولّدة إجرائيًا داخل المتصفح — تجوّل فيها") },
      { title: bi("Rydo Egypt", "ريدو مصر"), href: "#rydo", live: false, note: bi("Full ride-hailing platform — flagship case study on this page", "منصة نقل كاملة — دراسة الحالة الرائدة في هذه الصفحة") },
    ],
  },
  {
    id: "ai",
    name: bi("Artificial Intelligence", "الذكاء الاصطناعي"),
    line: bi(
      "Intelligent systems, automation, and practical AI-powered products.",
      "أنظمة ذكية وأتمتة ومنتجات عملية مدعومة بالذكاء الاصطناعي.",
    ),
    vision: bi(
      "I treat AI as a product layer with real users and real constraints — voice latency, auth, retention — not as a demo reel.",
      "أتعامل مع الذكاء الاصطناعي كطبقة منتج فيها مستخدمون حقيقيون وقيود حقيقية — التأخير الصوتي، والمصادقة، والاستمرارية — لا كفيديو عرض.",
    ),
    links: [
      { title: bi("Emo — AI English Tutor", "إيمو — معلم إنجليزي ذكي"), href: "https://emo-ai-english-tutor.vercel.app", live: true, note: bi("Hourly AI voice lessons, real accounts, streaks — Supabase", "دروس صوتية ذكية كل ساعة، حسابات حقيقية، سلاسل التزام — Supabase") },
      { title: bi("AIRA — Windows AI Assistant", "آيرا — مساعدة ويندوز الذكية"), href: "https://github.com/Xerox1010555/aira-ai-assistant", live: false, note: bi("C#/.NET 8 — LLM tool-calling, voice, Android companion", "C#/.NET 8 — استدعاء أدوات LLM، صوت، ورفيق أندرويد") },
    ],
  },
];

/* ---------------- Proof Room featured stories ---------------- */

export interface Story {
  slug: string;
  no: string;
  title: Bi;
  kind: Bi;
  shot: string;
  accent: string;
  problem: Bi;
  why: Bi;
  role: Bi;
  challenge: Bi;
  decision: Bi;
  outcome: Bi;
  learned: Bi;
  stack: string[];
  live?: string;
  repo?: string;
}

export const STORIES: Story[] = [
  {
    slug: "cars",
    no: "P.01",
    title: bi("AMIER CARS — 3D Showroom", "أمير كارز — صالة عرض 3D"),
    kind: bi("3D Product Experience", "تجربة منتج ثلاثية الأبعاد"),
    shot: "/shots/cars.jpg",
    accent: "#d4af37",
    problem: bi(
      "Car listings online are photo albums. You can't check the cabin, open the hood, or feel the car — you contact a salesperson and wait.",
      "عروض العربيات أونلاين ألبومات صور. لا تقدر تفحص الكابينة ولا تفتح الكابوت ولا تحس العربي — تقف مع مندوب مبيعات وتنتظر.",
    ),
    why: bi(
      "The moment someone can inspect the car themselves, the conversation with the seller starts from interest instead of suspicion.",
      "لحظة ما يستطيع الشخص فحص العربي بنفسه، يبدأ الحديث مع البائع من اهتمام لا من شك.",
    ),
    role: bi(
      "Solo builder. Scene design, streaming pipeline, interaction model, deployment and hardening.",
      "باني مستقل. تصميم المشهد، خط بث الأصول، نموذج التفاعل، النشر والتقوية.",
    ),
    challenge: bi(
      "Seven detailed vehicles can crush a browser. Cinema-grade hero assets usually mean minutes of loading.",
      "سبع عربيات بتفاصيلها يسحقون أي متصفح. وأصول العرض السينمائية تعني عادة دقائق تحميل.",
    ),
    decision: bi(
      "Stream each car on demand as Draco-compressed GLB instead of preloading the full collection — first paint stays fast, the detail arrives when the visitor asks for it.",
      "بُثّ كل عربية عند الطلب بصيغة GLB مضغوطة بـ Draco بدل تحميل المجموعة كلها — أول ظهور يبقى سريعًا، والتفاصيل تصل عندما يطلبها الزائر.",
    ),
    outcome: bi(
      "Live in production: hood, wheels, brakes and cabin open in real time; AR placement on mobile. Everything verifiable below.",
      "تعمل في إنتاج حقيقي: الكابوت والعجلات والفرامل والكابينة تُفتح لحظيًا، ووضع AR على الموبايل. وكل شيء قابل للتحقق أدناه.",
    ),
    learned: bi(
      "Perceived speed is a product feature. How gracefully you degrade a heavy scene decides who stays.",
      "السرعة المُحسوسة ميزة منتج. أناقة تخفيف المشهد الثقيل هي ما يقرر من يبقى.",
    ),
    stack: ["Three.js", "Draco GLB", "WebGL", "Procedural lighting", "Vercel"],
    live: "https://amier-cars-3d-showroom.vercel.app",
    repo: "https://github.com/Xerox1010555/amier-cars-3d-showroom",
  },
  {
    slug: "carx",
    no: "P.02",
    title: bi("CarX Atelier — Configurator", "كاركس أتيليه — المُكوِّن"),
    kind: bi("Full-Stack 3D Commerce", "تجارة 3D كاملة"),
    shot: "/shots/carx.jpg",
    accent: "#e8c46a",
    problem: bi(
      "Most configurators end with a dead 'send inquiry' button. Nothing exists behind it — no order record, no back office.",
      "معظم المُكوِّنات تقف عند زر «اطلب عرضًا» ميت. لا يوجد شيء خلفه — لا سجل طلبات ولا إدارة خلفية.",
    ),
    why: bi(
      "A configurator without an order book is theatre. The real part starts after the visitor is convinced.",
      "مُكوِّن بلا سجل طلبات مجرد مسرح. والجزء الحقيقي يبدأ بعد إقناع الزائر.",
    ),
    role: bi(
      "Solo builder. Front-end, pricing API, admin console, persistence, tests, PWA.",
      "باني مستقل. الواجهة، API التسعير، لوحة الإدارة، التخزين، الاختبارات، PWA.",
    ),
    challenge: bi(
      "Running a strict CSP with a self-hosted Three.js pipeline — inline scripts and third-party CDNs were off the table.",
      "تشغيل CSP صارم مع خط أنابيب Three.js مستضاف ذاتيًا — لا سكربتات داخلية ولا CDN خارجي.",
    ),
    decision: bi(
      "Vanilla ES-module SPA + node:sqlite + a 10-assertion API test suite: boring, provable infrastructure over fashionable stack choices.",
      "واجهة SPA بـ ES-نقاط خام + node:sqlite + مجموعة اختبارات API بعشرة تأكيدات: بنية مملة وقابلة للإثبات تتفوق على اختيارات الأزياء.",
    ),
    outcome: bi(
      "Live checkout: paint, rims and roofs priced by a real API; JWT-protected admin reads the order book; offline shell works.",
      "دفع حي يعمل: الطلاء والجنوط والأسقف تُسعَّر بـ API حقيقي؛ لوحة إدارة محمية بـ JWT تقرأ سجل الطلبات؛ ووضع أوفلاين يعمل.",
    ),
    learned: bi(
      "Constraints (strict CSP, no CDN crutch) produce cleaner architecture than freedom does.",
      "القيود (CSP صارم ولا عكاز CDN) تنتج معمارية أنظف من الحرية.",
    ),
    stack: ["Express 5", "node:sqlite", "Three.js r186", "JWT admin", "PWA", "EN/AR"],
    live: "https://carx-3d-configurator.vercel.app",
    repo: "https://github.com/Xerox1010555/carx-3d-configurator",
  },
  {
    slug: "emo",
    no: "P.03",
    title: bi("Emo — AI English Tutor", "إيمو — معلم إنجليزي ذكي"),
    kind: bi("AI Learning Product", "منتج تعلم بالذكاء الاصطناعي"),
    shot: "/shots/emo.jpg",
    accent: "#f8696b",
    problem: bi(
      "Most Egyptian learners can read English but freeze when speaking. Practising alone has zero feedback.",
      "معظم المتعلمين المصريين يقرؤون الإنجليزية لكن يتجمدون عند الكلام. والتمرين الفردي بلا أي تغذية راجعة.",
    ),
    why: bi(
      "A patient, always-available conversation partner costs the learner nothing — but changes the habit of practising.",
      "شريك حوار صبور ومتاح دائمًا لا يكلف المتعلم شيئًا — لكنه يغيّر عادة التمرين نفسها.",
    ),
    role: bi(
      "Solo builder. Product flow, AI lesson generation, voice interaction, auth, data model.",
      "باني مستقل. تدفق المنتج، توليد الدروس الذكي، التفاعل الصوتي، المصادقة، نموذج البيانات.",
    ),
    challenge: bi(
      "Keeping the AI teacher consistent: persona, curriculum progression and streaks must survive log-out, not vanish when a session ends.",
      "ثبات المعلم الذكي: الشخصية وتدرج المنهج وسلاسل الالتزام يجب أن تعيش بعد الخروج، ولا تموت عند انتهاء الجلسة.",
    ),
    decision: bi(
      "State everything in Supabase — accounts, hourly lesson cadence, streaks — so the 'teacher' keeps memory while the sessions stay disposable.",
      "أخزّن كل الحالة في Supabase — الحسابات، وإيقاع الدروس كل ساعة، والسلاسل — فالمعلم يحتفظ بالذاكرة والجلسات تبقى مؤقتة.",
    ),
    outcome: bi(
      "Live product: real sign-up, hourly AI lessons, voice lessons, curriculum tracking — all evidence below.",
      "منتج حي: تسجيل حقيقي، دروس ذكية كل ساعة، دروس صوتية، تتبع منهج — الدليل كله أدناه.",
    ),
    learned: bi(
      "With AI products, the wrapper state (accounts, cadence, streaks) matters as much as the model call.",
      "مع منتجات الذكاء الاصطناعي، حالة الغلاف (حسابات، إيقاع، سلاسل) مهمة بقدر نداء الموديل نفسه.",
    ),
    stack: ["React", "Supabase", "AI voice", "PWA"],
    live: "https://emo-ai-english-tutor.vercel.app",
    repo: "https://github.com/Xerox1010555/emo-ai-english-tutor",
  },
  {
    slug: "villas",
    no: "P.04",
    title: bi("BRAND — Villas in New Cairo", "براند — فيلات القاهرة الجديدة"),
    kind: bi("Procedural 3D Real Estate", "عقارات 3D إجرائية"),
    shot: "/shots/villas.jpg",
    accent: "#e07a3f",
    problem: bi(
      "Villa buyers judge a floor plan they can't feel. Brochures show a photo; nobody takes the sense of walls and light.",
      "مشترو الفلل يحكمون على مخطط لا يشعرون به. البروشور صورة، ولا أحد يأخذ إحساس الجدران والضوء.",
    ),
    why: bi(
      "Letting someone walk the villa themselves answers dozens of questions no agent would.",
      "أن تترك الشخص يجول في الفيلا بنفسه يجيب على عشرات الأسئلة التي لن يجيب عنها وكيل.",
    ),
    role: bi(
      "Solo builder. Procedural generation, exploration modes, mood switching, EN/AR copy.",
      "باني مستقل. التوليد الإجرائي، أنماط الاستكشاف، تبديل الأجواء، النسخة ثنائية اللغة.",
    ),
    challenge: bi(
      "Generating the villa from code — no modeling file — and keeping framerate sane on ordinary phones.",
      "توليد الفيلا من كود — بلا ملف موديل — ومع الحفاظ على معدل إطارات معقول في هواتف عادية.",
    ),
    decision: bi(
      "Procedural geometry with mode gates: aerial, dollhouse, walk and tour expose different level-of-detail at different heights.",
      "هندسة إجرائية مع بوابات الأنماط: جوي، ومنظر البيت المصغّر، وسير، وجولة — كل نمط يعرض مستوى تفصيل مختلف على ارتفاع مختلف.",
    ),
    outcome: bi(
      "Live: walk the property in first person, day/night moods, EN/AR storytelling.",
      "تعمل حيًّا: تجوّل داخل العقار بمنظور الشخص الأول، أجواء نهار/ليل، وسرديات EN/AR.",
    ),
    learned: bi(
      "Generative architecture is a codebase subject, not a visual trick — the structure reads like software.",
      "العمارة التوليدية موضوع قواعد بيانات وكود، لا ترف بصري — البنية تُقرأ كسوفتوير.",
    ),
    stack: ["Three.js", "Procedural generation", "GSAP", "EN/AR"],
    live: "https://brand-villas-3d.vercel.app",
    repo: "https://github.com/Xerox1010555/brand-villas-3d",
  },
  {
    slug: "crown",
    no: "P.05",
    title: bi("Crown & Co — Rolex Boutique", "كرون آند كو — بوتيك لوكس"),
    kind: bi("Craft: Single-File Engineering", "حِرفة: هندسة بملف واحد"),
    shot: "/shots/crown.jpg",
    accent: "#c9a86b",
    problem: bi(
      "Luxury online boutiques are usually boring templates with a language switcher bolted on.",
      "متاجر الفخامة أونلاين غالبًا قوالب جاهزة مملة، مع مبدّل لغة مثبت عليها بعنف.",
    ),
    why: bi(
      "This audience is used to boutique service; the site must behave like a boutique, not a form.",
      "هذا الجمهور متعوّد على خدمة البوتيك؛ فيجب أن يتصرف الموقع كبوتيك، لا كنموذج.",
    ),
    role: bi(
      "Solo builder. Design, 3D hero, RTL system, multi-currency cart, checkout flows.",
      "باني مستقل. التصميم، بطل 3D، نظام RTL، سلة متعددة العملات، تدفقات الدفع.",
    ),
    challenge: bi(
      "Full Arabic RTL in a single-file architecture — layout logic can't hide behind a UI library.",
      "RTL عربي كامل في معمارية ملف واحد — لا يمكن إخفاء منطق التخطيط خلف مكتبة واجهات جاهزة.",
    ),
    decision: bi(
      "Pure client side with zero build step: a discipline experiment — how far can craft go on one page with no tooling?",
      "عميل خالص بلا خطوة بناء: تجربة انضباط — كم يمكن للحرفة أن تمضي في صفحة واحدة بلا أدوات؟",
    ),
    outcome: bi(
      "Live: live 3D hero with full EN/AR RTL, multi-currency cart and checkout flows.",
      "تعمل حيًّا: بطل 3D حي مع RTL كامل EN/AR، سلة متعددة العملات، وتدفقات دفع.",
    ),
    learned: bi(
      "RTL is a systems problem, not a translation problem — it reshapes structure.",
      "RTL مسألة نظام، لا مسألة ترجمة — فهو يعيد تشكيل البنية.",
    ),
    stack: ["Three.js", "GSAP", "RTL system", "Multi-currency", "Single-file"],
    live: "https://crown-watch-boutique.vercel.app",
    repo: "https://github.com/Xerox1010555/crown-watch-boutique",
  },
];

/* ---------------- Ledger — all 12 live deployments ---------------- */

export interface LedgerRow {
  name: Bi;
  what: Bi;
  kind: Bi;
  href: string;
  repo: string;
}

export const LEDGER: LedgerRow[] = [
  { name: bi("AMIER CARS — 3D Showroom", "أمير كارز — صالة عرض 3D"), what: bi("On-demand car inspection in the browser", "فحص عربيات حسب الطلب داخل المتصفح"), kind: bi("3D", "ثلاثي الأبعاد"), href: "https://amier-cars-3d-showroom.vercel.app", repo: "https://github.com/Xerox1010555/amier-cars-3d-showroom" },
  { name: bi("CarX Atelier", "كاركس أتيليه"), what: bi("Configurator with real order book + admin", "مُكوِّن بسجل طلبات حقيقي ولوحة إدارة"), kind: bi("Full-Stack", "فول-ستاك"), href: "https://carx-3d-configurator.vercel.app", repo: "https://github.com/Xerox1010555/carx-3d-configurator" },
  { name: bi("Aurelia — Haute Boutique", "أوريليا — بوتيك راقٍ"), what: bi("Scroll-choreographed watch experience (EN/AR)", "تجربة ساعات بفن الإيقاع (EN/AR)"), kind: bi("3D", "ثلاثي الأبعاد"), href: "https://aurelia-boutique.vercel.app", repo: "https://github.com/Xerox1010555/aurelia" },
  { name: bi("Crown & Co", "كرون آند كو"), what: bi("Single-file boutique with live 3D hero + RTL", "بوتيك بملف واحد وبطل 3D حي و RTL"), kind: bi("Craft", "حِرفة"), href: "https://crown-watch-boutique.vercel.app", repo: "https://github.com/Xerox1010555/crown-watch-boutique" },
  { name: bi("Oyster & Co.", "أويستر آند كو"), what: bi("Next.js boutique platform (repo: full app)", "منصة متجر بـ Next.js (الكود: التطبيق الكامل)"), kind: bi("Platform", "منصة"), href: "https://oyster-co.vercel.app", repo: "https://github.com/Xerox1010555/oyster-co" },
  { name: bi("BRAND — Villas", "براند — فيلات"), what: bi("Procedural villa — walk it in first person", "فيلا إجرائية — تجوّل بمنظور الشخص الأول"), kind: bi("3D", "ثلاثي الأبعاد"), href: "https://brand-villas-3d.vercel.app", repo: "https://github.com/Xerox1010555/brand-villas-3d" },
  { name: bi("Grido1 — F1 Platform", "جريدو1 — منصة فورمولا"), what: bi("Data-driven driver storytelling, EN/AR", "سردية سائق مدعومة بالبيانات، EN/AR"), kind: bi("Astro", "أسترو"), href: "https://grido1-f1-platform.vercel.app", repo: "https://github.com/Xerox1010555/grido1-f1-platform" },
  { name: bi("Diet Soda — Pure Zero", "دايت صودا — بيور زيرو"), what: bi("Brand microsite with interactive 3D can (Lit)", "موقع براند بعلبة 3D تفاعلية (Lit)"), kind: bi("Brand", "براند"), href: "https://diet-soda-blush.vercel.app", repo: "https://github.com/Xerox1010555/diet-soda" },
  { name: bi("Emo — AI English Tutor", "إيمو — معلم إنجليزي ذكي"), what: bi("Hourly AI voice lessons with real accounts", "دروس صوتية ذكية كل ساعة بحسابات حقيقية"), kind: bi("AI", "AI"), href: "https://emo-ai-english-tutor.vercel.app", repo: "https://github.com/Xerox1010555/emo-ai-english-tutor" },
  { name: bi("The System — Solo Edition", "النظام — إصدار سولو"), what: bi("Gamified habits trainer — web, Windows, Android", "مدرب عادات بأسلوب ألعاب — ويب، ويندوز، أندرويد"), kind: bi("Apps", "تطبيقات"), href: "https://solo-edition.vercel.app", repo: "https://github.com/Xerox1010555/solo-system" },
  { name: bi("Glass UI Gallery", "معرض Glass UI"), what: bi("18 standalone glassmorphism components", "18 مكوّن زجاجي مستقل"), kind: bi("Design Sys", "نظام تصميم"), href: "https://glass-ui-gallery.vercel.app", repo: "https://github.com/Xerox1010555/glass-ui-gallery" },
  { name: bi("GRAVEN — Drafting Works", "غراڤن — أعمال رسم"), what: bi("Studio site with video reels + automated checks", "موقع استوديو بريلات فيديو وفحوص آلية"), kind: bi("Agency", "وكالة"), href: "https://graven-drafting-works.vercel.app", repo: "https://github.com/Xerox1010555/graven-drafting-works" },
];
