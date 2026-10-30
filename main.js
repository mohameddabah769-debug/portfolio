/**
 * Eng. Mohamed Dabah — Software Engineer Portfolio
 * Interactive Bilingual Engine (English / Arabic) & UI Logic
 */

// Comprehensive i18n Translation Dictionary
const translations = {
  en: {
    "nav.name": "Eng. Mohamed Dabah",
    "nav.title": "Full-Stack Software Engineer",
    "nav.services": "Services",
    "nav.estimator": "Estimator",
    "nav.certificates": "Certificates",
    "nav.articles": "Insights",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "nav.backToTop": "Back to Top ↑",
    
    "hero.status": "Available for new opportunities & freelance projects",
    "hero.availableBadge": "Available for Hire",
    "hero.greeting": "Crafting Scalable",
    "hero.highlight": "Software Systems",
    "hero.ending": "& Clean Code.",
    "hero.bio": "I'm Mohamed Dabah, a Full-Stack Software Engineer with 4+ years of hands-on experience architecting high-performance web applications, resilient backend APIs, and modern cloud solutions designed to scale.",
    "hero.viewWork": "Explore Selected Work",
    "hero.getInTouch": "Get In Touch",
    "hero.socialTitle": "Direct Links:",
    "hero.metric1": "Projects Deployed",
    "hero.metric2": "On-Time Delivery",

    "stats.experience": "Years of Experience",
    "stats.projects": "Delivered Projects",
    "stats.reliability": "Uptime & Stability",
    "stats.latency": "Average API Latency",

    "services.badge": "What I Offer",
    "services.title": "Engineering Services & Solutions",
    "services.desc": "Comprehensive software solutions crafted from concept to scalable production with high code quality and security.",
    "services.s1.title": "MVP to Full Production Launch",
    "services.s1.desc": "Building complete, production-grade applications from scratch. From clean system architecture and database schema design to responsive modern frontend and deployment.",
    "services.s2.title": "APIs & Microservices Integration",
    "services.s2.desc": "Designing and implementing robust RESTful and GraphQL APIs, third-party payment gateways, event-driven message queues, and seamless integrations with external services.",
    "services.s3.title": "Performance & Database Tuning",
    "services.s3.desc": "Pinpointing latency bottlenecks, eliminating slow queries, tuning PostgreSQL/MongoDB schemas, and setting up intelligent Redis caching to reduce load times by up to 80%.",
    "services.s4.title": "Software Architecture & DevOps",
    "services.s4.desc": "Architecture consultation, containerization with Docker, automated CI/CD pipelines, and cloud hosting setup ensuring high availability, automated backups, and security.",
    "services.ctaTitle": "Need a technical consultation or project evaluation?",
    "services.ctaSub": "Schedule a quick 15-min discovery call or chat directly via WhatsApp.",
    "services.ctaBtn": "Book a 15-Min Call",

    "estimator.badge": "Interactive Tool",
    "estimator.title": "Project Cost & Timeline Estimator",
    "estimator.desc": "Select your project requirements to calculate an estimated scope, timeline, and preliminary investment range.",
    "estimator.step1": "1. Select Project Type",
    "estimator.t1": "Full-Stack Web Application",
    "estimator.t1Desc": "Custom Frontend + Backend + Database",
    "estimator.t2": "High-Performance API Backend",
    "estimator.t2Desc": "Microservices / REST / GraphQL & DB",
    "estimator.t3": "SaaS MVP Platform",
    "estimator.t3Desc": "Subscriptions, Dashboard & Multi-tenancy",
    "estimator.t4": "Performance & Code Audit",
    "estimator.t4Desc": "Speed optimization & Architecture review",
    "estimator.step2": "2. Additional Features & Integrations",
    "estimator.f1": "User Authentication & Roles",
    "estimator.f2": "Payment Gateway Integration",
    "estimator.f3": "Real-Time WebSockets / Chat",
    "estimator.f4": "Docker & Cloud CI/CD Setup",
    "estimator.resultTitle": "ESTIMATED INVESTMENT & TIMELINE",
    "estimator.whatsappBtn": "Discuss Scope on WhatsApp",

    "certs.badge": "Verified Credentials",
    "certs.title": "Accredited Programming Diplomas",
    "certs.desc": "Official diplomas awarded with Grade (Excellent) by Egyptian Science House, validating advanced engineering proficiency in Java and Python.",
    "certs.c1.title": "Programming Diploma in Java",
    "certs.c1.desc": "Certified by Egyptian Science House (بيت العلم المصري) for mastering object-oriented programming (OOP), enterprise Java application architecture, and robust design patterns.",
    "certs.c2.title": "Programming Diploma in Python",
    "certs.c2.desc": "Certified by Egyptian Science House (بيت العلم المصري) for excellence in advanced Python development, automated scripting, backend APIs, and data processing.",
    "certs.c3.title": "American Board Diploma in Java & Python",
    "certs.c3.desc": "Accredited by the American Board of Professional Studies (ABPS - Wyoming, USA). Serial No: 0038513. Verified at Americanboard-us.com.",

    "github.badge": "Open Source & Code Activity",
    "github.title": "Live GitHub Ecosystem (@mohameddabah769-debug)",
    "github.desc": "Public repositories, active code commits, and software engineering contributions.",

    "articles.badge": "Engineering Insights",
    "articles.title": "Technical Thoughts & Architecture Notes",
    "articles.desc": "Articles on designing high-throughput systems, concurrency in Python and Java, and clean database engineering.",
    "articles.a1.title": "Scaling Python & Java Backends to 10k+ Requests/Sec",
    "articles.a1.desc": "A practical analysis of asynchronous event loops, thread pool executors in Java, and non-blocking I/O architectures to prevent worker starvation.",
    "articles.a2.title": "PostgreSQL Query Tuning: From 450ms Down to 28ms",
    "articles.a2.desc": "How composite indexing, analyzing EXPLAIN ANALYZE execution trees, and selective Redis caching eliminated severe database bottlenecks.",
    "articles.a3.title": "Designing Idempotent APIs with Zero Transaction Loss",
    "articles.a3.desc": "Implementing idempotency keys, atomic distributed locks, and retry buffers for mission-critical financial and SaaS payment platforms.",

    "skills.badge": "Technical Arsenal",
    "skills.title": "Tools, Frameworks & Architecture",
    "skills.desc": "A pragmatic technology stack chosen for speed, developer ergonomics, maintainability, and production stability.",
    "skills.cat1": "Frontend Engineering",
    "skills.cat1Desc": "Building fast, accessible, responsive user interfaces with attention to state management and core web vitals.",
    "skills.cat2": "Backend & APIs",
    "skills.cat2Desc": "Designing clean RESTful and GraphQL APIs, event-driven pipelines, secure authentication, and business logic.",
    "skills.cat3": "Cloud, DevOps & Data",
    "skills.cat3Desc": "Relational and NoSQL storage, containerization, CI/CD automated deployments, and resilient cloud architecture.",

    "projects.badge": "Case Studies",
    "projects.title": "Featured Projects & Systems",
    "projects.desc": "Handcrafted software solutions solving tangible problems with speed and precision.",
    "projects.caseStudy": "Case Study",
    "projects.p1.title": "ApexPay: High-Throughput Financial Ledger",
    "projects.p1.desc": "Architected a distributed ledger handling double-entry transactions with strict idempotency and zero data loss under peak loads of 12,000 requests/sec.",
    "projects.p2.title": "EdgePulse: Distributed API Gateway & Telemetry",
    "projects.p2.desc": "High-performance edge reverse-proxy with built-in token-bucket rate limiting, OAuth2 authentication, and sub-10ms latency metrics gathering.",
    "projects.p3.title": "LogiFlow: Fleet Logistics & Real-Time Tracking",
    "projects.p3.desc": "Comprehensive logistics suite with real-time GPS fleet tracking via WebSockets, predictive route fuel optimization, and automated invoicing.",
    "projects.p4.title": "StreamData: Real-Time Event Pipeline",
    "projects.p4.desc": "Streaming ingestion pipeline handling unstructured telemetry logs, automated schema validation, and real-time anomaly alerts for enterprise clients.",

    "exp.badge": "Career Journey",
    "exp.title": "Work Experience & Impact",
    "exp.r1.title": "Senior Software Engineer",
    "exp.r1.desc": "Leading the technical design and deployment of high-concurrency microservices, mentoring junior engineers, and reducing server infrastructure costs by 32% through container orchestration and caching strategies.",
    "exp.r2.title": "Full-Stack Software Engineer",
    "exp.r2.desc": "Engineered customer-facing React & Node.js applications, implemented end-to-end payment gateway integrations, and boosted Lighthouse performance scores from 58 to 96.",
    "exp.r3.title": "Software & Web Developer",
    "exp.r3.desc": "Developed bespoke web applications, automated data synchronization tasks using Python scripts, and authored clean technical documentation for clients across diverse industries.",

    "about.badge": "Engineering Philosophy",
    "about.title": "Passionate About Architecture, Simplicity & Speed",
    "about.p1": "I believe that great software isn't just about writing code that works — it's about building systems that are simple to understand, effortless to maintain, and resilient enough to adapt to tomorrow's growth.",
    "about.p2": "Whether architecting a distributed backend service, optimizing database queries, or crafting an intuitive user experience, I focus on measurable quality: clean abstraction, thorough testing, and predictable performance.",
    "about.point1": "Clean Architecture (SOLID)",
    "about.point2": "Automated CI/CD Pipelines",
    "about.point3": "High Availability & Security",

    "contact.badge": "Let's Connect",
    "contact.title": "Have an upcoming project or engineering challenge?",
    "contact.desc": "I'm always excited to discuss software architecture, new ventures, consulting opportunities, or full-stack development projects. Let's build something remarkable together.",
    "contact.emailLabel": "DIRECT EMAIL",
    "contact.whatsappLabel": "WHATSAPP CHAT",
    "contact.instantChat": "Instant Direct Chat",
    "contact.locLabel": "LOCATION",
    "contact.locValue": "Cairo, Egypt (Available Globally / Remote)",
    
    "form.name": "YOUR NAME *",
    "form.email": "YOUR EMAIL *",
    "form.subject": "PROJECT SUBJECT",
    "form.message": "MESSAGE *",
    "form.submit": "Send Message",
    "form.success": "Thank you! Your message has been received. I'll get back to you within 24 hours."
  },
  
  ar: {
    "nav.name": "م. محمد دباح",
    "nav.title": "مهندس برمجيات متكامل (Full-Stack)",
    "nav.services": "الخدمات",
    "nav.estimator": "حاسبة المشروع",
    "nav.certificates": "الشهادات",
    "nav.articles": "مقالات هندسية",
    "nav.skills": "المهارات والتقنيات",
    "nav.projects": "المشاريع",
    "nav.experience": "مسار الخبرات",
    "nav.about": "عنّي",
    "nav.contact": "تواصل معي",
    "nav.cta": "تواصل معي",
    "nav.backToTop": "العودة للأعلى ↑",

    "hero.status": "متاح للمشاريع الجديدة وفرص العمل والتعاقد",
    "hero.availableBadge": "متاح للتعاقد والمشاريع",
    "hero.greeting": "هندسة برمجيات",
    "hero.highlight": "عالية الأداء والتوسع",
    "hero.ending": "وكود نظيف ومتقن.",
    "hero.bio": "أنا محمد دباح، مهندس برمجيات متكامل (Full-Stack) بخبرة تزيد عن 4 سنوات في بناء وتصميم البنى التحتية البرمجية، واجهات الويب العصرية، والأنظمة الخلفية وقواعد البيانات والحلول السحابية المستقرة.",
    "hero.viewWork": "استعراض سابقة الأعمال",
    "hero.getInTouch": "تواصل معي مباشرة",
    "hero.socialTitle": "روابط سريعة:",
    "hero.metric1": "مشروع منجز",
    "hero.metric2": "التزام زمني تام",

    "stats.experience": "سنوات من الخبرة العملية",
    "stats.projects": "مشروع برمجي مكتمل",
    "stats.reliability": "استقرار وموثوقية الأنظمة",
    "stats.latency": "سرعة استجابة الـ API",

    "services.badge": "ما أقدمه لك",
    "services.title": "الخدمات والحلول البرمجية",
    "services.desc": "حلول برمجية متكاملة تُبنى من الفكرة والتخطيط حتى الإطلاق السحابي والنمو، بأعلى معايير جودة الكود والأمان.",
    "services.s1.title": "تطوير التطبيقات من الصفر حتى الإطلاق (MVP to Production)",
    "services.s1.desc": "بناء تطبيقات رقمية متكاملة من الصفر: تصميم معمارية النظام، قواعد البيانات، واجهات مستخدم حديثة وسريعة متجاوبة مع كافة الشاشات، ورفعها على السحابة.",
    "services.s2.title": "بناء وتطوير الـ APIs وتكامل الأنظمة الخلفية",
    "services.s2.desc": "تصميم وبرمجة واجهات برمجية REST و GraphQL عالية التحمل، ربط بوابات الدفع الإلكتروني، طوابير معالجة البيانات، والتكامل مع أي خدمات خارجية.",
    "services.s3.title": "تحسين أداء وسرعة المواقع وقواعد البيانات",
    "services.s3.desc": "تحليل مكامن البطء وعلاج الاستعلامات الثقيلة في PostgreSQL و MongoDB، وتطبيق طبقات تخزين مؤقت فائقة السرعة عبر Redis لتقليل وقت التحميل بنسبة تصل لـ 80%.",
    "services.s4.title": "استشارات معمارية البرمجيات وDevOps",
    "services.s4.desc": "استشارات هندسية متخصصة، حزم الأنظمة عبر Docker، وأتمتة النشر والاختبار (CI/CD)، وتهيئة السحابة لضمان أعلى استقرار وتقليل تكلفة الخوادم.",
    "services.ctaTitle": "هل تحتاج لاستشارة تقنية أو تقييم هندسي لمشروعك؟",
    "services.ctaSub": "احجز جلسة استكشافية سريعة لمدة 15 دقيقة أو تواصل معي عبر الواتساب فوراً.",
    "services.ctaBtn": "حجز جلسة استشارة سريعة",

    "estimator.badge": "أداة تفاعلية",
    "estimator.title": "حاسبة تقدير تكلفة ومدة المشروع",
    "estimator.desc": "حدد متطلبات مشروعك للحصول على تقدير فوري تقريبي للميزانية، المدة الزمنية، والمميزات المطلوبة.",
    "estimator.step1": "1. اختر نوع المشروع الأساسي",
    "estimator.t1": "تطبيق ويب متكامل (Full-Stack Web App)",
    "estimator.t1Desc": "واجهة أمامية + خادم خلفي + قاعدة بيانات",
    "estimator.t2": "نظام خلفي وAPIs فائقة السرعة",
    "estimator.t2Desc": "معمارية مايكروسيرفيسز / REST / GraphQL",
    "estimator.t3": "منصة برمجية SaaS MVP",
    "estimator.t3Desc": "اشتراكات، لوحة تحكم، ودعم تعدد المستخدمين",
    "estimator.t4": "فحص وتدقيق الأداء البرمجي والأمان",
    "estimator.t4Desc": "تسريع الموقع ومراجعة المعمارية والكود",
    "estimator.step2": "2. مميزات وإضافات تقنية اختيارية",
    "estimator.f1": "إدارة المستخدمين والصلاحيات والتحقق",
    "estimator.f2": "ربط بوابات الدفع الإلكتروني (Stripe/Paymob)",
    "estimator.f3": "شات ومحادثة حية فورية (WebSockets)",
    "estimator.f4": "تهيئة الحاويات Docker وأتمتة CI/CD السحابية",
    "estimator.resultTitle": "التقدير التقريبي للاستثمار والمدة الزمنية",
    "estimator.whatsappBtn": "مناقشة تفاصيل المشروع عبر واتساب",

    "certs.badge": "شهادات معتمدة",
    "certs.title": "دبلومات البرمجة الرسمية المعتمدة",
    "certs.desc": "دبلومات رسمية معتمدة بتقدير ممتاز من بيت العلم المصري، توثق إتقان المعايير الهندسية في لغتي Java و Python.",
    "certs.c1.title": "دبلومة البرمجة في لغة Java (بتقدير ممتاز)",
    "certs.c1.desc": "معتمدة من بيت العلم المصري (Egyptian Science House) في البرمجة كائنية التوجه (OOP)، بناء التطبيقات الكبرى، وأنماط التصميم المعمارية المتقدمة.",
    "certs.c2.title": "دبلومة البرمجة في لغة Python (بتقدير ممتاز)",
    "certs.c2.desc": "معتمدة من بيت العلم المصري (Egyptian Science House) في تطوير بايثون المتقدم، الأتمتة البرمجية، بناء الـ APIs، ومعالجة البيانات.",
    "certs.c3.title": "دبلومة البورد الأمريكي في البرمجة (Java & Python)",
    "certs.c3.desc": "معتمدة دولياً من البورد الأمريكي للدراسات المهنية (ABPS - وايومنغ، أمريكا) بتقدير ممتاز (70 ساعة تدريبية). مسلسل رقم: 0038513.",

    "github.badge": "المشاريع والكود المفتوح",
    "github.title": "منظومة GitHub الحية (@mohameddabah769-debug)",
    "github.desc": "المستودعات البرمجية العامة، الالتزامات البرمجية النشطة، والمساهمات الهندسية.",

    "articles.badge": "أفكار ومقالات هندسية",
    "articles.title": "مذكرات تقنية ورؤى معمارية",
    "articles.desc": "مقالات في تصميم الأنظمة الموزعة، التعامل مع الضغط العالي في بايثون وجافا، وهندسة قواعد البيانات النظيفة.",
    "articles.a1.title": "معالجة أكثر من 10 آلاف طلب/ثانية في بايثون وجافا",
    "articles.a1.desc": "تحليل عملي لحلقات الأحداث غير المتزامنة ومجموعات الخيوط (Threads) في جافا لتفادي اختناق الخوادم.",
    "articles.a2.title": "ضبط أداء استعلامات PostgreSQL: من 450ms إلى 28ms",
    "articles.a2.desc": "كيف أدت الفهارس المركبة وقراءة شجرة التنفيذ والتخزين المؤقت في Redis إلى القضاء على بطء قواعد البيانات.",
    "articles.a3.title": "تصميم واجهات برمجية لا تفقد العمليات (Idempotent APIs)",
    "articles.a3.desc": "تطبيق مفاتيح منع التكرار والأقفال الموزعة في الأنظمة المالية ومنصات التجارة الإلكترونية الحساسة.",

    "skills.badge": "الترسانة التقنية",
    "skills.title": "الأدوات، أطر العمل وهندسة الأنظمة",
    "skills.desc": "منظومة تقنية متوازنة ومختارة بعناية لتحقيق أعلى سرعة تنفيذ، سهولة صيانة، وأقصى استقرار تشغيلي.",
    "skills.cat1": "تطوير واجهات المستخدم (Frontend)",
    "skills.cat1Desc": "بناء واجهات سريعة وتفاعلية ومتوافقة تماماً مع مختلف الشاشات، مع التركيز على تجربة المستخدم وسرعة التحميل.",
    "skills.cat2": "الأنظمة الخلفية والـ APIs (Backend)",
    "skills.cat2Desc": "تصميم معماريات برمجية نظيفة للـ REST و GraphQL، أنظمة التحقق والأمان، ومعالجة الأحداث والبيانات الضخمة.",
    "skills.cat3": "الحوسبة السحابية وقواعد البيانات (Cloud & DevOps)",
    "skills.cat3Desc": "إدارة قواعد البيانات العلائقية والوثائقية، الحاويات (Docker)، الأتمتة (CI/CD)، والحلول السحابية المرنة.",

    "projects.badge": "دراسات حالة ونماذج",
    "projects.title": "مشاريع برمجية وأنظمة مختارة",
    "projects.desc": "حلول برمجية واقعية صُممت لحل مشكلات أعمال حقيقية بأعلى كفاءة وسرعة.",
    "projects.caseStudy": "تفاصيل المشروع",
    "projects.p1.title": "ApexPay: منصة محاسبية ومدفوعات فائقة الأداء",
    "projects.p1.desc": "معمارية برمجية موزعة تدعم القيود المزدوجة مع ضمان تام بعدم تكرار العمليات أو فقدان البيانات تحت ضغط يصل إلى 12,000 طلب/ثانية.",
    "projects.p2.title": "EdgePulse: بوابة ربط برمجية وتحليل فوري",
    "projects.p2.desc": "بوابة API سريعة تعمل على حافة السحابة (Edge Proxy) مزودة بنظام حماية ضد الإغراق، إدارة الصلاحيات ومراقبة الأداء بزمن استجابة أقل من 10ms.",
    "projects.p3.title": "LogiFlow: منصة إدارة وتتبع أساطيل النقل واللوجستيات",
    "projects.p3.desc": "نظام SaaS متكامل للتتبع الحي اللحظي عبر WebSockets، وخوارزميات تحسين واستهلاك الوقود وإصدار الفواتير التلقائية.",
    "projects.p4.title": "StreamData: خط معالجة البيانات والتحليلات اللحظية",
    "projects.p4.desc": "نظام استقبال وتدفق للبيانات الضخمة يعتمد على Kafka و Elasticsearch لفحص السجلات وكشف المشاكل الأمنية لحظياً.",

    "exp.badge": "المسار المهني",
    "exp.title": "سجل الخبرات والإنجازات",
    "exp.r1.title": "Senior Software Engineer (مهندس برمجيات أول)",
    "exp.r1.desc": "قيادة التصميم المعماري للأنظمة الموزعة وإرشاد الفريق الهندسي، مع تقليل تكاليف البنية التحتية السحابية بنسبة 32% عبر حلول التخزين المؤقت وتوزيع الحاويات.",
    "exp.r2.title": "Full-Stack Software Engineer (مهندس برمجيات متكامل)",
    "exp.r2.desc": "تطوير تطبيقات ويب كبرى باستخدام React و Node.js، وربط بوابات الدفع الإلكتروني، ورفع كفاءة سرعة المواقع من 58 إلى 96 في مؤشرات Google Lighthouse.",
    "exp.r3.title": "Software & Web Developer (مطور برمجيات وويب)",
    "exp.r3.desc": "بناء وتطوير حلول برمجية مخصصة للعملاء، وكتابة اسكربتات Python لأتمتة معالجة البيانات، وتوثيق المعماريات الفنية للشركات.",

    "about.badge": "الفلسفة الهندسية",
    "about.title": "شغف بالمعمارية البرمجية، البساطة والسرعة الفائقة",
    "about.p1": "أؤمن أن البرمجيات العظيمة لا تقتصر على كتابة كود يعمل فحسب، بل تتعلق ببناء أنظمة برمجية بسيطة في فهمها، سهلة في صيانتها وتطويرها، وقادرة على استيعاب النمو المستقبلي بدون انهيار.",
    "about.p2": "سواء كنت أصمم بنية خلفية موزعة، أو أضبط أداء استعلامات قواعد البيانات، أو أصنع واجهة مستخدم سلسة، فإن تركيزي الدائم ينصب على الجودة القابلة للقياس والنتائج الحقيقية على أرض الواقع.",
    "about.point1": "معمارية برمجية نظيفة (SOLID Principles)",
    "about.point2": "أتمتة كاملة للاختبار والنشر (CI/CD Pipelines)",
    "about.point3": "توافرية عالية وحماية مشددة (High Availability)",

    "contact.badge": "تواصل معي",
    "contact.title": "هل لديك مشروع جديد أو تحدٍ هندسي تريد إنجازه؟",
    "contact.desc": "يسعدني دائماً النقاش حول المعماريات البرمجية، الأفكار والمشاريع الجديدة، أو الاستشارات التقنية. دعنا نصنع شيئاً استثنائياً معاً.",
    "contact.emailLabel": "البريد الإلكتروني المباشر",
    "contact.whatsappLabel": "محادثة واتساب سريعة",
    "contact.instantChat": "تواصل فوري عبر الواتساب",
    "contact.locLabel": "الموقع الجغرافي",
    "contact.locValue": "القاهرة، مصر (متاح للعمل مع مختلف دول العالم عن بعد)",

    "form.name": "الاسم الكريم *",
    "form.email": "البريد الإلكتروني *",
    "form.subject": "موضوع المشروع أو الاستشارة",
    "form.message": "تفاصيل الرسالة أو المشروع *",
    "form.submit": "إرسال الرسالة الآن",
    "form.success": "شكراً جزيلاً لك! تم استلام رسالتك بنجاح، وسأقوم بالرد عليك خلال أقل من 24 ساعة."
  }
};

// Current active language (Default English, easily toggled)
let currentLang = 'en';

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileMenu();
  initFilters();
  initContactForm();
  initClipboard();
  initEstimator();
});

// Setup Language
function initLanguage() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');

  // Check saved preference or default to English
  const savedLang = localStorage.getItem('preferred_lang');
  if (savedLang === 'ar') {
    setLanguage('ar');
  } else {
    setLanguage('en');
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(nextLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);

  const html = document.documentElement;
  const langLabel = document.getElementById('langLabel');

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    langLabel.textContent = 'English';
    document.title = 'م. محمد دباح | مهندس برمجيات';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    langLabel.textContent = 'العربية';
    document.title = 'Mohamed Dabah | Software Engineer';
  }

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update form placeholders
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  if (nameInput && emailInput && messageInput) {
    if (lang === 'ar') {
      nameInput.placeholder = 'مثال: محمد أحمد';
      emailInput.placeholder = 'mohamed@example.com';
      subjectInput.placeholder = 'تطوير تطبيق ويب / استشارة برمجية';
      messageInput.placeholder = 'اكتب نبذة عن المشروع، الأهداف والجدول الزمني المطلوب...';
    } else {
      nameInput.placeholder = 'John Doe';
      emailInput.placeholder = 'john@example.com';
      subjectInput.placeholder = 'New Web Application / Architecture Consulting';
      messageInput.placeholder = 'Tell me about your project, goals, and timeline...';
    }
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Project Category Filtering
function initFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active classes
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-emerald-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-900', 'text-slate-400', 'border', 'border-slate-800');
      });
      btn.classList.add('active', 'bg-emerald-500', 'text-slate-950', 'font-bold');
      btn.classList.remove('bg-slate-900', 'text-slate-400', 'border', 'border-slate-800');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

// Form Submission Simulation
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successAlert = document.getElementById('formSuccessAlert');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending...</span>`;
      submitBtn.disabled = true;

      // Realistic submit simulation
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        successAlert.classList.remove('hidden');

        // Hide success alert after 6 seconds
        setTimeout(() => {
          successAlert.classList.add('hidden');
        }, 6000);
      }, 800);
    });
  }
}

// Clipboard copy helper with toast
function initClipboard() {
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  if (copyEmailBtn && toast) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('mohameddabah769@gmail.com').then(() => {
        toastMsg.textContent = currentLang === 'ar' ? 'تم نسخ البريد الإلكتروني بنجاح!' : 'Email copied to clipboard!';
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
          toast.classList.remove('translate-y-0', 'opacity-100');
          toast.classList.add('translate-y-20', 'opacity-0');
        }, 2800);
      });
    });
  }
}

// Project Scope & Cost Estimator Logic
function initEstimator() {
  const typeBtns = document.querySelectorAll('.est-type-btn');
  const checkboxes = document.querySelectorAll('.est-checkbox');
  const priceDisplay = document.getElementById('estPriceDisplay');
  const timelineDisplay = document.getElementById('estTimelineDisplay');
  const whatsAppBtn = document.getElementById('estWhatsAppBtn');

  if (!priceDisplay || !timelineDisplay || !whatsAppBtn) return;

  let basePrice = 1200;
  let baseWeeks = 4;
  let selectedTypeName = 'Full-Stack Web Application';

  function calculate() {
    let totalPrice = basePrice;
    let totalWeeks = baseWeeks;
    let selectedFeatures = [];

    checkboxes.forEach(cb => {
      if (cb.checked) {
        totalPrice += parseFloat(cb.dataset.price || 0);
        totalWeeks += parseFloat(cb.dataset.time || 0);
        const label = cb.closest('label').querySelector('span').textContent.trim();
        selectedFeatures.push(label);
      }
    });

    priceDisplay.textContent = `$${totalPrice.toLocaleString()}`;
    timelineDisplay.textContent = `~ ${totalWeeks.toFixed(1)} ${currentLang === 'ar' ? 'أسابيع' : 'Weeks'}`;

    // Update WhatsApp link with pre-filled message
    const msg = currentLang === 'ar' 
      ? `مرحباً م. محمد، قمت باستخدام حاسبة المشروع على موقعك:\n- نوع المشروع: ${selectedTypeName}\n- التقدير المالي: $${totalPrice.toLocaleString()}\n- المدة التقديرية: ${totalWeeks.toFixed(1)} أسابيع\nأود مناقشة تفاصيل المشروع والبدء معك.`
      : `Hello Eng. Mohamed, I calculated an estimate on your website:\n- Project Type: ${selectedTypeName}\n- Estimated Budget: $${totalPrice.toLocaleString()}\n- Estimated Timeline: ${totalWeeks.toFixed(1)} Weeks\nI would like to discuss the scope and get started.`;

    whatsAppBtn.href = `https://wa.me/201095744676?text=${encodeURIComponent(msg)}`;
  }

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => {
        b.classList.remove('active', 'border-emerald-500/40', 'bg-emerald-500/10');
        b.classList.add('border-slate-800', 'bg-slate-950/60');
      });
      btn.classList.add('active', 'border-emerald-500/40', 'bg-emerald-500/10');
      btn.classList.remove('border-slate-800', 'bg-slate-950/60');

      basePrice = parseFloat(btn.dataset.base || 1200);
      baseWeeks = parseFloat(btn.dataset.weeks || 4);
      selectedTypeName = btn.querySelector('span').textContent.trim();
      calculate();
    });
  });

  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculate);
  });

  calculate();
}

// Certificate Lightbox Modal handlers (Global functions for onclick)
window.openCertModal = function(imageSrc, title) {
  const modal = document.getElementById('certModal');
  const img = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');

  if (modal && img) {
    img.src = imageSrc;
    if (modalTitle && title) modalTitle.textContent = title;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeCertModal = function() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Close modal on click outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('certModal');
  if (modal && e.target === modal) {
    window.closeCertModal();
  }
});
