import { bi, type Bi } from "@/i18n/lang";

/* ------------------------------------------------------------------
   BEYOND THE BUILD — flagship case study, decision lab, journey,
   human signal and opportunities (EN/AR).
   Rydo facts come from the actual repository audit (read-only):
   FastAPI backend, state machine, row locking, price lock, tests.
   ------------------------------------------------------------------ */

/* ---------------- Rydo flagship case study ---------------- */

export const RYDO = {
  title: bi("Rydo Egypt — from PRD to working platform code", "ريدو مصر — من وثيقة المنتج إلى كود منصة عامل"),
  kicker: bi(
    "A full ride-hailing platform: passenger web app, driver web app, admin dashboard, Android app, and a real FastAPI backend — designed, built and audit-tested as one system.",
    "منصة طلب مشاوير كاملة: تطبيق ويب للراكب، تطبيق ويب للسائق، لوحة إدارة، تطبيق أندرويد، وباكند FastAPI حقيقي — مصمم ومبني ومُختبر كنظام واحد.",
  ),
  status: bi(
    "Case study — the codebase exists and is shown here; it has no public users and no launch. I consider that honesty part of the product.",
    "دراسة حالة — قاعدة الكود موجودة ومعروضة هنا؛ مستخدمون عموميون صفر ولا إطلاق. أعدّ هذا الصدق جزءًا من المنتج نفسه.",
  ),
  intentTitle: bi("The intent", "النيّة"),
  intent: bi(
    "Ride-hailing in Egypt is opaque: fares shift after acceptance, commissions feel arbitrary, and streets are hard to address. Rydo's design principles: Trust, Commitment, Location Accuracy, Transparency — with a price that locks at request time and never changes mid-ride.",
    "طلب المشاوير في مصر معتم: الأسعار تتغير بعد الموافقة، والعمولات تبدو اعتباطية، والعناوين صعبة الإسناد. مبادئ Rydo: الثقة، الالتزام، دقة الموقع، الشفافية — بسعر يقفل لحظة الطلب ولا يتغير أثناء الرحلة.",
  ),
  role: bi(
    "Solo, end to end: product documents (PRD, feature bible, business rules), FastAPI backend, rider + driver web apps, admin dashboard, Android app.",
    "منفرد من البداية للنهاية: وثائق المنتج (PRD، موسوعة المزايا، قواعد العمل)، باكند FastAPI، تطبيقا الويب للراكب والسائق، لوحة إدارة، وتطبيق أندرويد.",
  ),
  builtTitle: bi("Verified implemented", "مُنفّذ ومُتحقَّق"),
  built: [
    bi("FastAPI backend (async SQLAlchemy + Alembic) with clean module boundaries: auth, ride, matching, pricing, payment, trust, safety, admin — one practical monolith explicitly shaped to split later.", "باكند FastAPI (SQLAlchemy غير متزامن + Alembic) بحدود وحدات نظيفة: مصادقة، رحلات، مطابقة، تسعير، مدفوعات، ثقة، أمان، إدارة — مونوليت عملي مشكّل صراحة كي يُفصل لاحقًا."),
    bi("Ride state machine enforced in code: requesting → matched → accepted → driver_arrived → in_progress → completed/cancelled — any illegal transition answers 409 INVALID_STATE_TRANSITION.", "آلة حالات الرحلة مفروضة في الكود: طلب → مطابقة → قبول → وصول السائق → انطلاق → إتمام/إلغاء — أي انتقال غير قانوني يجيب 409 INVALID_STATE_TRANSITION."),
    bi("SELECT … FOR UPDATE row locking so concurrent accept/decline/cancel/complete calls serialize — the losing caller re-reads the committed state and gets a clean 409 instead of last-write-wins.", "قفل الصفوف SELECT … FOR UPDATE لتسلسل نداءات القبول/الرفض/الإلغاء/الإتمام المتزامنة — الخاسر يعيد قراءة الحالة المرصودة ويحصل على 409 نظيف بدل «آخر كاتب يفوز»."),
    bi("Price lock: locked_fare is computed once at request time and no endpoint can modify it later; any gap above 15% between locked and actual fare is auto-flagged for review.", "قفل السعر: locked_fare يُحسب مرة واحدة عند الطلب ولا يمكن لأي نقطة نهاية تعديله لاحقًا؛ وأي فجوة تفوق 15% بين المقفل والفعلي تُعلَّم تلقائيًا للمراجعة."),
    bi("Driver availability guard: accepting a second active ride is impossible — DRIVER_HAS_ACTIVE_RIDE 409, availability flips off on accept.", "حراسة توفّر السائق: قبول رحلة نشطة ثانية مستحيل — 409 DRIVER_HAS_ACTIVE_RIDE، والتوفر يطفأ لحظة القبول."),
    bi("OTP sign-up + JWT with refresh rotation, role guards for rider/driver/admin, unified error envelope.", "تسجيل عبر OTP + JWT مع تدوير refresh، وحراسة أدوار للراكب والسائق والإدارة، ومغلف أخطاء موحد."),
    bi("Web client (React/Vite): rider booking flow, live ride tracking over WebSocket with JWT auth and exponential-backoff reconnect, driver dashboard/requests/earnings, light/dark theme synced to a backend preference.", "عميل الويب (React/Vite): تدفق حجز الراكب، متابعة حية عبر WebSocket بمصادقة JWT وإعادة اتصال بتأخير تصاعدي، لوحة السائق وطلباته وأرباحه، وسمة نهار/ليل متزامنة مع تفضيل مخزن في الباكند."),
    bi("Admin dashboard (React): users, rides, disputes, fraud, reports.", "لوحة إدارة (React): المستخدمون، الرحلات، النزاعات، الاحتيال، التقارير."),
    bi("Android app (Kotlin) with Google Maps integration and complete driver flows (HTTP polling client — see the planned list).", "تطبيق أندرويد (Kotlin) بتكامل خرائط جوجل وتدفق للسائق مكتمَل (عميل HTTP polling — انظر القائمة المخططة)."),
    bi("Backend tests: 12 pytest suites on SQLite + fakeredis covering auth/OTP, the full ride lifecycle (request → matching → accept → arrival → start → completion → rating → trust-score update) and pricing.", "اختبارات الباكند: 12 مجموعة pytest على SQLite + fakeredis تغطي المصادقة/OTP، ودورة حياة الرحلة كاملة (طلب → مطابقة → قبول → وصول → انطلاق → إتمام → تقييم → تحديث نقاط الثقة)، والتسعير."),
    bi("Web tests: 14 unit tests passing at the time of the final audit report.", "اختبارات الويب: 14 اختبار وحدة ناجحة وقت تقرير التدقيق النهائي."),
  ],
  plannedTitle: bi("Deliberately not yet — planned next", "بقصد لم يكتمل بعد — مخطط له"),
  planned: [
    bi("Real map tiles on web — currently a static placeholder; Leaflet/Mapbox integration documented as the next step.", "بلاطات خرائط حقيقية على الويب — حاليًا صورة بديلة ثابتة؛ ودمج Leaflet/Mapbox مُوثّق كخطوة تالية."),
    bi("Route polyline + geocoding on the web client.", "خط المسار + تحويل الإحداثيات إلى عنوان في عميل الويب."),
    bi("Android WebSocket client — Android polls over HTTP today; no real-time channel yet.", "عميل WebSocket للأندرويد — الأندرويد اليوم يعمل بـ HTTP polling؛ ولا قناة لحظية بعد."),
    bi("Firebase Cloud Messaging wired end-to-end — the backend notification service logs today; the Android side already ships FCM integration.", "ربط Firebase Cloud Messaging حتى النهاية — خدمة الإشعارات في الباكند تسجّل اليوم، وجانب الأندرويد فيه تكامل FCM جاهز."),
    bi("Electronic payments — the payment service handles cash for now.", "المدفوعات الإلكترونية — خدمة الدفع تتعامل مع النقد وحده حاليًا."),
    bi("Spatial matching at scale — simple availability scan today; the PostGIS ST_DWithin / Redis GEO path is documented in code comments.", "مطابقة مكانية على نطاق واسع — بحث توفر بسيط اليوم؛ ومسار PostGIS ST_DWithin / Redis GEO مُوثّق في تعليقات الكود."),
    bi("Public operation — deployment configs exist; no marketing launch, no public fleet. By design at this stage.", "التشغيل العام — إعدادات النشر موجودة؛ ولا إطلاق تسويقي ولا أسطول عام. بتصميم في هذه المرحلة."),
  ],
  challengeTitle: bi("The hardest problem — and the decision", "أصعب مشكلة — والقرار"),
  challenge: bi(
    "Two drivers tap accept on the same matched ride within milliseconds. Without protection, one ride gets two drivers — or worse, two 'accepted' states that both commit: classic last-write-wins.",
    "سواقان يضغطان قبولًا على نفس الرحلة المطابقة خلال أجزاء من الثانية. بدون حماية، رحلة واحدة تأخذ سواقين — أو أسوأ: حالتا «قُبِلت» ترسوان معًا في قاعدة البيانات، أي «آخر كاتب يفوز» الكلاسيكية.",
  ),
  optionsTitle: bi("Options considered", "الخيارات المدروسة"),
  options: [
    { name: bi("Application-level flag before commit", "عَلَم يُضبط في التطبيق قبل الـ commit"), verdict: bi("Cheapest to write; a second request can still race between check and commit. Reads clean, breaks under load.", "الأرخص كتابةً؛ لكن نداءً ثانيًا قد يسبق الحارس بين الفحص والترسيخ. يبدو نظيفًا وينكسر تحت الحمل."), ok: false },
    { name: bi("DB row lock — SELECT … FOR UPDATE", "قفل صف في قاعدة البيانات — SELECT … FOR UPDATE"), verdict: bi("Serialize the mutation on the row itself: the second caller re-reads committed status and the state machine answers 409. No extra infrastructure needed.", "تُسلسِل التعديل على الصف نفسه: الثاني يعيد قراءة الحالة المرصودة وآلة الحالات تجيب 409. بلا بنية تحتية إضافية."), ok: true },
    { name: bi("Distributed lock (Redis) around accept", "قفل موزّع (Redis) حول القبول"), verdict: bi("Right tool for multi-node scale; an extra moving part an MVP doesn't need yet — and it doesn't replace the in-row guard anyway.", "الأداة الصحيحة لتعدد الخوادم؛ لكنها جزء متحرك إضافي لا يحتاجه إطلاق أولي — وهي أصلًا لا تعوّض حراسة الصف نفسه."), ok: false },
  ],
  chosenNote: bi(
    "Chosen: the row lock — put the guard where the state lives. This is the actual implementation, verified in the repository:",
    "الاختيار: قفل الصف — ضع الحارس حيث تسكن الحالة. هذا هو التنفيذ الفعلي، مُتحقَّق منه في المستودع:",
  ),
  codeCaption: bi("from app/services/ride_service.py — the real guard in the Rydo backend", "من app/services/ride_service.py — الحارس الحقيقي في باكند Rydo"),
  outcomeTitle: bi("Where it stands — with numbers", "أين يقف — بالأرقام"),
  outcome: bi(
    "By the latest documented internal integration audit: Backend 8.5/10 · Web 8.5/10 · Security 9/10 · Overall system 7.7/10 — with 5 critical and 4 high-priority integration defects found and fixed, and the issues log kept open. Backend test suites: 12 passing. Web unit tests: 14 passing at that report.",
    "بحسب آخر تدقيق تكامل داخلي مُوثّق: الباكند 8.5/10 · الويب 8.5/10 · الأمان 9/10 · النظام كليًا 7.7/10 — مع إيجاد وإصلاح 5 عيوب حرجة و4 عالية الأولوية، وسجل المشاكل يبقى مفتوحًا. اختبارات الباكند الناجحة: 12، واختبارات الويب: 14 بتقرير ذلك الوقت.",
  ),
  nextTitle: bi("Next moves", "الخطوات التالية"),
  next: bi(
    "Real map tiles and routing on web, FCM end-to-end, Android real-time sync — then a one-district pilot instead of a city-wide splash.",
    "بلاطات خرائط حقيقية وتوجيه على الويب، وربط FCM حتى النهاية، ومزامنة لحظية للأندرويد — ثم تجربة حية في حيٍّ واحد بدل انفجار على مستوى المدينة.",
  ),
  learnedTitle: bi("What it taught me", "ما علّمني إياه"),
  learned: bi(
    "State machines beat boolean flags. Race windows hide behind two taps. A price you cannot change is a trust primitive, so audit variance automatically. And there is an honest gap between working code and a working business — name it clearly and build across it.",
    "آلات الحالات تتفوق على الأعلام المنطقية. نوافذ التزامن تختبئ خلف ضغطتين. السعر الذي لا يمكن تغييره هو أساس الثقة، لذا راجع الفروقات آليًا. وهناك فجوة صادقة بين كودٍ يعمل وبزنسٍ يعمل — سمِّها بوضوح وابنِ عبرها.",
  ),
  sysTitle: bi("System map", "خريطة النظام"),
  sysNote: bi(
    "Simplified view of the implemented architecture — every box below maps to real modules in the repository.",
    "منظور مبسّط للمعمارية المنفذة — كل صندوق أدناه يقابل وحدات حقيقية في المستودع.",
  ),
};

export const SYS_MAP = {
  clients: ["Rider Web", "Driver Web", "Admin Dashboard", "Android App"],
  api: ["FastAPI · /api/v1", "WebSocket /ws/rides/{id}"],
  services: ["auth", "ride", "matching", "pricing", "payment", "trust", "safety"],
  data: ["PostgreSQL", "Redis"],
  flow: ["OTP → JWT", "state machine", "row locks", "price lock"],
};

/* ---------------- Decision Lab ---------------- */

export interface LabCase {
  id: string;
  no: string;
  label: "real" | "sim";
  badge: Bi;
  title: Bi;
  problem: Bi;
  constraints: Bi;
  approaches: { name: Bi; trade: Bi }[];
  chosenIndex: number;
  chosenNote?: Bi;
  testNote?: Bi;
  learned: Bi;
}

export const LAB_CASES: LabCase[] = [
  {
    id: "one-ride",
    no: "D.01",
    label: "real",
    badge: bi("REAL — implemented in the Rydo backend", "حقيقي — مُنفَّذ في باكند Rydo"),
    title: bi("One driver, one ride.", "سواق واحد، رحلة واحدة."),
    problem: bi(
      "A driver can receive two accept-taps in the same second — on the same ride, or on two different rides. Both paths must fail closed without corrupting state.",
      "السائق قد يستقبل ضغطتي قبول في نفس الثانية — على نفس الرحلة أو على رحلتين. والمساران يجب أن يفشلا بأمان دون إفساد الحالة.",
    ),
    constraints: bi(
      "No extra infrastructure on day one. Postgres available. The rule must hold even under two racing HTTP requests.",
      "لا بنية إضافية في اليوم الأول. Postgres متاح. والقاعدة يجب أن تصح حتى مع نداءين متسابقين.",
    ),
    approaches: [
      { name: bi("App-level availability flag", "عَلَم توفّر في التطبيق"), trade: bi("✗ simplest, fails between check and commit under concurrency", "✗ أبسط حل لكنه يفشل بين الفحص والترسيخ تحت التوازي") },
      { name: bi("Row lock + state machine (chosen)", "قفل صف + آلة حالات (الاختيار)"), trade: bi("✓ serialized at the DB; losers get a clean 409; verifiable in tests", "✓ تُسلسَل عند قاعدة البيانات؛ والخاسر يحصل على 409 نظيف؛ وقابل للتحقق في الاختبارات") },
      { name: bi("Distributed Redis lock", "قفل Redis موزّع"), trade: bi("✓ scales multi-node; ✗ extra ops burden for an MVP", "✓ يتوسع على تعدد الخوادم؛ ✗ عبء تشغيلي زائد لإطلاق أولي") },
    ],
    chosenIndex: 1,
    chosenNote: bi(
      "Verified in code: driver_accept() re-selects with Ride.id != ride_id against the four busy statuses, then flips is_available=false. The second accept answers 409 DRIVER_HAS_ACTIVE_RIDE.",
      "مُتحقَّق في الكود: driver_accept() يعيد البحث مع استثناء Ride.id != ride_id على الحالات الأربع المشغولة، ثم يطفئ is_available=false. القبول الثاني يجيب 409 DRIVER_HAS_ACTIVE_RIDE.",
    ),
    testNote: bi(
      "How I'd test it: two parallel POSTs on the same ride — assert exactly one 200 and one 409; then a driver accept on two different rides racing — same assertion. Both cases live in the pytest lifecycle suite.",
      "كيف أختبره: نداءان متوازيان POST على نفس الرحلة — أتوقع بالضبط 200 واحدة و409 واحدة؛ ثم قبول سائق على رحلتين مختلفتين بالتوازي — نفس التوقع. الحالتان موجودتان في مجموعة pytest فعلًا.",
    ),
    learned: bi("Concurrency bugs hide behind two taps. Put the guard where the state lives, then write the test that loses gracefully.", "عيوب التزامن تختبئ خلف ضغطتين. ضع الحارس حيث تسكن الحالة، ثم اكتب الاختبار الذي يخسر برشاقة."),
  },
  {
    id: "price-lock",
    no: "D.02",
    label: "real",
    badge: bi("REAL — implemented in the Rydo backend", "حقيقي — مُنفَّذ في باكند Rydo"),
    title: bi("The promise: the price you saw is the price you pay.", "الوعد: السعر الذي رأيته هو الذي ستدفعه."),
    problem: bi(
      "Riders fear mid-trip repricing. A fare that can silently change destroys the trust pillar the product is built on.",
      "الركّاب يخافون من تغيير السعر فجأة أثناء الرحلة. والسعر الذي يتغير صامتًا يهدم عمود الثقة الذي بُني عليه المنتج.",
    ),
    constraints: bi(
      "Pricing still needs supply/demand signals (count of nearby available drivers). Cancellation and completion paths must coexist with the lock.",
      "التسعير يحتاج إشارات عرض/طلب (عدد السائقين المتاحين قربًا). ومسارات الإلغاء والإتمام يجب أن تتعايش مع القفل.",
    ),
    approaches: [
      { name: bi("Dynamic repricing mid-ride", "إعادة تسعير ديناميكية أثناء الرحلة"), trade: bi("✗ revenue-max, trust-burn — the exact behavior users resent", "✗ يعظّم الإيراد ويحرق الثقة — سلوك يكرهه المستخدمون") },
      { name: bi("Announced fixed surge windows", "نوافذ تسعير معلنة ثابتة"), trade: bi("✓ predictable; ✗ coarse and clunky to operate", "✓ متوقعة؛ ✗ خشنة وصعبة التشغيل") },
      { name: bi("Locked fare + automatic variance audit (chosen)", "سعر مقفول + تدقيق تلقائي للفرق (الاختيار)"), trade: bi("✓ an instant trust primitive; deviations self-report to review", "✓ أداة ثقة فورية؛ والانحرافات تُبلّغ عن نفسها للمراجعة") },
    ],
    chosenIndex: 2,
    chosenNote: bi(
      "Verified in code: locked_fare is written once at request_ride() from pricing_service.compute_estimate(supply, demand); no endpoint mutates it later; completion writes actual_fare and gaps above 15% flip the ride to FLAGGED_FOR_REVIEW automatically.",
      "مُتحقَّق في الكود: locked_fare يُكتب مرة واحدة في request_ride() من pricing_service.compute_estimate(supply, demand)؛ ولا نقطة نهاية تُعدّله لاحقًا؛ والإتمام يكتب actual_fare والفروقات التي تتجاوز 15% تقلب حالة الرحلة إلى FLAGGED_FOR_REVIEW تلقائيًا.",
    ),
    learned: bi("Trust is an engineering choice, not a marketing line. Lock the promise, audit the gap.", "الثقة خيار هندسي، لا سطر تسويقي. اقفل الوعد، وراجع الفارق."),
  },
  {
    id: "cold-start",
    no: "D.03",
    label: "sim",
    badge: bi("SIMULATION — a business scenario I reason about; nothing shipped", "محاكاة — سيناريو بيزنس أخوض فيه التفكير؛ لا شيء مُنفَّذ"),
    title: bi("Where does a two-sided market start?", "من أين يبدأ سوق ذو وجهين؟"),
    problem: bi(
      "Simulated: a young ride-hailing platform has 500k potential riders, zero supply density, and one engineering team. Where do the first thousand drivers go?",
      "محاكاة: منصة طلب مشاوير ناشئة لديها 500 ألف راكب محتمل، وكثافة عرض صفر، وفريق هندسي واحد. أول ألف سائق أين يُنفقون؟",
    ),
    constraints: bi(
      "Simulated constraints: limited marketing budget, drivers need visible earnings in week one, riders churn if waits exceed three minutes.",
      "قيود افتراضية: ميزانية تسويق محدودة، والسائق يحتاج أرباحًا مرئية في الأسبوع الأول، والراكب يتوقف عن الاستخدام إن تجاوز الانتظار ثلاث دقائق.",
    ),
    approaches: [
      { name: bi("City-wide launch (Cairo)", "إطلاق على مستوى المدينة (القاهرة)"), trade: bi("✓ maximum reach; ✗ spread thin — both sides wait for the other: classic cold-start death", "✓ أقصى وصول؛ ✗ تجزئة متناثرة — الطرفان ينتظران الآخر: موت البارد الكلاسيكي") },
      { name: bi("One-district pilot, dense ops", "تجربة حيٍّ واحد بعمليات كثيفة"), trade: bi("✓ real density + operational learning; ✗ slower brand reach — liquidity before logos", "✓ كثافة حقيقية + تعلم عملياتي؛ ✗ وصول علامة أبطأ — السيولة قبل الشعارات") },
      { name: bi("Supply-first seeding in one district", "زرع العرض أولًا في حيٍّ واحد"), trade: bi("✓ drivers concentrate where demand will be; ✗ idle drivers burn goodwill if riders are late", "✓ السائقون يتركزون حيث سيأتي الطلب؛ ✗ سائقون عاطلون يستنزفون حسن النية إن تأخر الركّاب") },
    ],
    chosenIndex: 1,
    chosenNote: bi(
      "My hypothetical pick: district pilot with supply-first seeding — density is measurable and fixable; reach is not. This is reasoning in the open, not a shipped decision.",
      "اختياري الافتراضي: تجربة بالحي مع زرع العرض أولًا — الكثافة قابلة للقياس والإصلاح، والوصول لا. هذا تفكير مكشوف، لا قرار مُنفَّذ.",
    ),
    learned: bi("Marketplaces die from missing liquidity, not missing features. Choose geography before features.", "الأسواق ذات الوجهين تموت من غياب السيولة لا غياب المزايا. اختر الجغرافيا قبل المزايا."),
  },
];

/* ---------------- Where I'm Going ---------------- */

export const JOURNEY = {
  pillarsTitle: bi("Three pillars", "ثلاثة أعمدة"),
  pillars: [
    {
      name: bi("BUILD", "ابنِ"),
      today: bi("Today: 12 live deployments, hardened and maintainable.", "اليوم: 12 نشرًا حيًّا، مُحصّنة وقابلة للصيانة."),
      horizon: bi("Horizon: systems people rely on daily without thinking about it.", "الأفق: أنظمة يعتمد عليها الناس يوميًا دون تفكير."),
    },
    {
      name: bi("UNDERSTAND", "افهم"),
      today: bi("Today: pricing, trust and commerce mechanics shipped in real products.", "اليوم: آليات تسعير وثقة وتجارة مُنفّذة في منتجات حقيقية."),
      horizon: bi("Horizon: markets, customers and unit economics — fluently.", "الأفق: الأسواق والعملاء واقتصاديات الوحدة — بطلاقة."),
    },
    {
      name: bi("LEAD", "قُد"),
      today: bi("Today: end-to-end delivery discipline as one person.", "اليوم: انضباط تسليم من البداية للنهاية بشخص واحد."),
      horizon: bi("Horizon: ventures, teams and standards others can build on.", "الأفق: مشاريع وفرق ومعايير يُبنى عليها."),
    },
  ],
  steps: [
    { name: bi("Curiosity", "الفضول"), note: bi("Where it started: taking devices apart — in my head first.", "من حيث بدأت: تفكيك الأجهزة أولًا في رأسي.") },
    { name: bi("Learning", "التعلّم"), note: bi("Publicly, by building — the repositories are my curriculum.", "علنًا وبالبناء — المستودعات هي منهجي.") },
    { name: bi("Building", "البناء"), note: bi("12 live deployments of increasing difficulty.", "12 نشرًا حيًّا بصعوبة متصاعدة.") },
    { name: bi("Solving Real Problems", "حل مشكلات حقيقية"), note: bi("Rydo: a real system's real problems, honestly documented.", "ريدو: مشكلات نظام حقيقي، مُوثّقة بصدق.") },
    { name: bi("Entrepreneurship", "ريادة الأعمال"), note: bi("The destination — aspirational, not yet achieved.", "الوجهة — طموحة، لم تتحقق بعد.") },
  ],
  now: {
    learning: { label: bi("Currently learning", "أتعلم حاليًا"), value: bi("", ""), placeholder: true },
    building: { label: bi("Currently building", "أبني حاليًا"), value: bi("This very site — BEYOND THE BUILD: honest numbers, a bilingual switcher, and a verified case study.", "هذا الموقع نفسه — نسخة BEYOND THE BUILD: أرقام صادقة، ومبدّل ثنائي اللغة، ودراسة حالة مُتحقَّقة."), placeholder: false },
    next: { label: bi("Next milestone", "المحطة التالية"), value: bi("", ""), placeholder: true },
  },
};

/* ---------------- Human Signal ---------------- */

export const SIGNAL = {
  how: [
    bi("I learn in public — the repositories are my notebook, mistakes left visible.", "أتعلم علنًا — المستودعات دفتري، والأخطاء تُركت مرئية."),
    bi("Smallest honest version first, then iterate with whoever actually cares.", "أصغر نسخة صادقة أولًا، ثم أعيد البناء مع من يهتم فعلًا."),
    bi("Feedback taken voraciously: a review that stings once teaches forever.", "أتناول التغذية الراجعة بشراهة: مراجعة تلسع مرةً تعلّم للعمر."),
    bi("Keep the codebase boring enough that another developer could maintain it.", "أُبقي القاعدة البرمجية بسيطة بما يكفي ليصونها مطوّر آخر."),
  ],
  principle: bi(
    "Move faster than the problem changes; ship smaller than the ego wants.",
    "تحرك أسرع من تغيّر المشكلة، وأسلّم أصغر مما يشتهي الغرور.",
  ),
  services: [
    { name: bi("3D & Immersive Web", "الويب ثلاثي الأبعاد"), desc: bi("Scenes, configurators and showrooms that run in the browser — no app store needed.", "مشاهد ومكوّنات وصالات عرض تعمل داخل المتصفح — بلا متجر تطبيقات.") },
    { name: bi("Full-Stack Platforms", "منصات فول-ستاك"), desc: bi("Next.js front-ends with secure Node/Express APIs, auth, databases, admin.", "واجهات Next.js مع APIs آمنة على Node/Express، ومصادقة وقواعد بيانات وإدارة.") },
    { name: bi("AI Products", "منتجات الذكاء الاصطناعي"), desc: bi("LLM tool-calling, voice interaction and real user accounts — inside useful flows.", "استدعاءات أدوات LLM، وتفاعل صوتي، وحسابات مستخدمين حقيقية — داخل مسارات مفيدة.") },
    { name: bi("End-to-End Delivery", "تسليم من البداية للنهاية"), desc: bi("From idea to production: design, build, test, deploy, harden and monitor.", "من الفكرة إلى الإنتاج: تصميم، بناء، اختبار، نشر، تقوية، ومراقبة.") },
  ],
};

/* ---------------- Opportunities ---------------- */

export const DOORS = [
  {
    id: "recruiters",
    icon: "★",
    title: bi("Recruiters & hiring managers", "مسؤولو التوظيف وصنّاع القرار"),
    bring: [
      bi("12 live deployments you can open right now — every link on this page works.", "12 نشرًا حيًّا تفتحها الآن — كل رابط في هذه الصفحة يعمل."),
      bi("Front-end craft (React/Next/Three.js) plus full-stack basics: Node/Express, SQL, auth.", "حرفة واجهات (React/Next/Three.js) مع أساسيات فول-ستاك: Node/Express وSQL ومصادقة."),
      bi("Deploy discipline: CSP-hardened sites, security headers, honest numbers.", "انضباط نشر: مواقع مُحصّنة بـ CSP ورؤوس أمان وأرقام صادقة."),
    ],
    want: [
      bi("Real team workflows: reviews, standards, production on shared systems.", "مجريات فريق حقيقية: مراجعات ومعايير وإنتاج على أنظمة مشتركة."),
      bi("Scale: systems serving real traffic, owned by many hands.", "توسّع: أنظمة تخدم حركة حقيقية بأيدٍ متعددة."),
    ],
  },
  {
    id: "scholarship",
    icon: "✦",
    title: bi("University & scholarship reviewers", "مراجعو الجامعات والمنح"),
    bring: [
      bi("Self-directed learning, evidenced by 14 public repositories and 12 public deployments.", "تعلُّم ذاتي موثّق بالدليل: 14 مستودعًا عامًا و12 نشرًا عموميًا."),
      bi("Diligence: documented audits, tests and honest status notes across projects.", "جدية: تدقيقات موثقة واختبارات وملاحظات حالة صادقة عبر المشاريع."),
      bi("A stated long-term ambition, written bilingually, with an interest in information systems.", "طموح طويل المدى مُصرَّح به، مكتوبًا ثنائيًا، مع اهتمام معلن بأنظمة المعلومات."),
    ],
    want: [
      bi("Formal foundations in CS/IS where self-teaching ends.", "أسس رسمية في علوم الحاسب/نظم المعلومات حيث يتوقف التعلم الذاتي."),
      bi("Mentors and structured feedback that outpace private iteration.", "مرشدون وتغذية راجعة منظمة تتجاوز سرعة التكرار الفردي."),
    ],
  },
  {
    id: "collab",
    icon: "✱",
    title: bi("Collaborators & founders", "الشركاء والمؤسسون"),
    bring: [
      bi("I can take a product from idea to live deploy in weeks, hardened from day one.", "آخذ المنتج من الفكرة إلى إطلاق حي في أسابيع، مُحصّنًا من أول يوم."),
      bi("Honest scoping: what is implemented and what is not — in writing.", "تأطير صادق: ما هو منفَّذ وما ليس كذلك — مكتوبًا."),
      bi("Bilingual EN/AR product delivery as a default, not an afterthought.", "تسليم منتج EN/AR ثنائي اللغة بشكل افتراضي من اليوم الأول، لا كإضافة لاحقة."),
    ],
    want: [
      bi("Domain experts for problems worth solving; designers who sweat craft.", "خبراء مجالات للمشكلات التي تستحق الحل؛ ومصممون يعشقون الحرفة."),
      bi("Business partners who know markets better than I do.", "شركاء بيزنس يعرفون الأسواق أحسن مني."),
    ],
  },
];

export const ROLES = bi(
  "Roles I'm looking for: Front-End Engineer · Full-Stack Intern · Junior AI Product Builder · Freelance Web Builds",
  "الأدوار المطلوبة: مهندس واجهات · متدرب فول-ستاك · مطور منتجات ذكاء اصطناعي مبتدئ · بناء مواقع بالتنفيذ الحر",
);

export const SKILL_GROUPS = [
  { name: bi("Front-End Engineering", "هندسة الواجهات"), chips: ["Next.js 15", "React 19", "TypeScript", "Three.js / R3F", "Astro", "CSS systems", "Responsive & a11y"] },
  { name: bi("Back-End & APIs", "الخلفية والـ APIs"), chips: ["FastAPI", "Node.js", "Express 5", "REST", "JWT auth", "WebSocket", "Testing (pytest / Vitest / Playwright)"] },
  { name: bi("Data & Delivery", "البيانات والتسليم"), chips: ["PostgreSQL", "SQLite", "Prisma", "Supabase", "Git & GitHub", "Vercel", "PWA", "CI habits"] },
];

export const AI_NOTE = bi(
  "A note on AI assistance: I use AI tools to accelerate drafts and research. Architecture, decisions, code reviews and this portfolio's honesty are mine. I disclose this the way I'd want a colleague to.",
  "ملاحظة حول استخدام الذكاء الاصطناعي: أستخدم أدوات AI لتسريع المسودات والبحث. أما المعمارية والقرارات ومراجعات الكود وصدق هذا البورتفوليو فمني. أُفصح عن ذلك كما أحب أن يفعل زميل.",
);
