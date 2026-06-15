/* ============================================================
   data.js — single source of truth
   PROJECTS: all case studies (bilingual)
   I18N: static UI copy (bilingual)
   Exposed as globals so the site runs from file:// and GitHub
   Pages without fetch/modules/CORS.
   ============================================================ */

window.PROJECTS = [
  {
    id: "calendar",
    index: "01",
    year: "2025",
    type: { ru: "Календарь", en: "Calendar" },
    title: { ru: "Настенный календарь", en: "Wall Calendar" },
    tools: ["Illustrator", "Photoshop", "AI"],
    cover: "images/works/calendar/cover.jpg",
    brief: {
      ru: "Создать настенный календарь на год, который остаётся актуальным украшением интерьера, а не просто сеткой дат.",
      en: "Design a yearly wall calendar that works as an interior object, not just a grid of dates.",
    },
    solution: {
      ru: "Двенадцать авторских разворотов с единой типографикой и сезонной палитрой. Сетка дат подчинена композиции, а не наоборот.",
      en: "Twelve custom spreads tied together by one type system and a seasonal palette. The date grid follows the composition, not the other way around.",
    },
    images: [
      {
        src: "images/works/calendar/cover.jpg",
        feature: true,
        caption: { ru: "Обложка", en: "Cover" },
        note: {
          ru: "Обложка задаёт тон всему году: крупная цифра, спокойная палитра и фактурная бумага превращают календарь в предмет интерьера.",
          en: "The cover sets the tone for the whole year: a large numeral, a calm palette and textured paper turn the calendar into an interior object.",
        },
      },
      { src: "images/works/calendar/01.jpg", video: "images/works/calendar/01.mp4", caption: { ru: "Лист 01", en: "Sheet 01" } },
      { src: "images/works/calendar/02.jpg", video: "images/works/calendar/02.mp4", caption: { ru: "Лист 02", en: "Sheet 02" } },
      { src: "images/works/calendar/03.jpg", video: "images/works/calendar/03.mp4", caption: { ru: "Лист 03", en: "Sheet 03" } },
      { src: "images/works/calendar/04.jpg", caption: { ru: "Лист 04", en: "Sheet 04" } },
      { src: "images/works/calendar/05.jpg", caption: { ru: "Лист 05", en: "Sheet 05" } },
      { src: "images/works/calendar/06.jpg", caption: { ru: "Лист 06", en: "Sheet 06" } },
      { src: "images/works/calendar/07.jpg", caption: { ru: "Лист 07", en: "Sheet 07" } },
      { src: "images/works/calendar/08.jpg", caption: { ru: "Лист 08", en: "Sheet 08" } },
      { src: "images/works/calendar/09.jpg", caption: { ru: "Лист 09", en: "Sheet 09" } },
    ],
  },
  {
    id: "catalog-1",
    index: "02",
    year: "2025",
    type: { ru: "Каталог", en: "Catalogue" },
    title: { ru: "Каталог продукции", en: "Product Catalogue" },
    tools: ["InDesign", "Photoshop", "Illustrator"],
    cover: "images/works/catalog-1/page-01.jpg",
    brief: {
      ru: "Систематизировать большой ассортимент в печатном каталоге, где легко ориентироваться и приятно листать.",
      en: "Organise a large product range into a print catalogue that is easy to navigate and pleasant to browse.",
    },
    solution: {
      ru: "Модульная сетка, ясная иерархия разделов и спокойная вёрстка дают воздух каждому товару и держат ритм на всём объёме.",
      en: "A modular grid, clear section hierarchy and calm layout give every product room to breathe and keep the rhythm across the whole book.",
    },
    images: [
      {
        type: "flipbook",
        caption: { ru: "Пролистайте каталог", en: "Leaf through the catalogue" },
        note: {
          ru: "Нажимайте на страницы или стрелки, чтобы листать макет как настоящий журнал.",
          en: "Tap the pages or the arrows to leaf through the layout like a real magazine.",
        },
        pages: [
          "images/works/catalog-1/page-01.jpg",
          "images/works/catalog-1/page-02.jpg",
          "images/works/catalog-1/page-03.jpg",
          "images/works/catalog-1/page-04.jpg",
          "images/works/catalog-1/page-05.jpg",
          "images/works/catalog-1/page-06.jpg",
          "images/works/catalog-1/page-07.jpg",
          "images/works/catalog-1/page-08.jpg",
          "images/works/catalog-1/page-09.jpg",
          "images/works/catalog-1/page-10.jpg",
          "images/works/catalog-1/page-11.jpg",
          "images/works/catalog-1/page-12.jpg",
        ],
      },
    ],
  },
  {
    id: "catalog-2",
    index: "03",
    year: "2025",
    type: { ru: "Каталог", en: "Catalogue" },
    title: { ru: "Имиджевый каталог", en: "Lookbook Catalogue" },
    tools: ["InDesign", "Photoshop", "AI"],
    cover: "images/works/catalog-2/page-01.jpg",
    brief: {
      ru: "Передать характер бренда через имиджевый каталог, где фотография и текст работают на одно настроение.",
      en: "Convey a brand's character through a lookbook where imagery and copy build a single mood.",
    },
    solution: {
      ru: "Крупные кадры на разворот, лаконичные подписи и продуманные паузы между сценами создают повествование, а не перечень.",
      en: "Full-spread imagery, restrained captions and deliberate pauses between scenes turn the book into a narrative rather than a list.",
    },
    images: [
      {
        type: "flipbook",
        caption: { ru: "Пролистайте каталог", en: "Leaf through the catalogue" },
        note: {
          ru: "Нажимайте на страницы или стрелки, чтобы листать макет как настоящий журнал.",
          en: "Tap the pages or the arrows to leaf through the layout like a real magazine.",
        },
        pages: [
          "images/works/catalog-2/page-01.jpg",
          "images/works/catalog-2/page-02.jpg",
          "images/works/catalog-2/page-03.jpg",
          "images/works/catalog-2/page-04.jpg",
          "images/works/catalog-2/page-05.jpg",
          "images/works/catalog-2/page-06.jpg",
          "images/works/catalog-2/page-07.jpg",
          "images/works/catalog-2/page-08.jpg",
          "images/works/catalog-2/page-09.jpg",
          "images/works/catalog-2/page-10.jpg",
          "images/works/catalog-2/page-11.jpg",
          "images/works/catalog-2/page-12.jpg",
        ],
      },
    ],
  },
  {
    id: "catalog-3",
    index: "04",
    year: "2024",
    type: { ru: "Каталог", en: "Catalogue" },
    title: { ru: "Технический каталог", en: "Technical Catalogue" },
    tools: ["InDesign", "Illustrator"],
    cover: "images/works/catalog-3/cover.svg",
    brief: {
      ru: "Сделать насыщенный данными технический каталог читаемым: таблицы, схемы, артикулы — без визуального шума.",
      en: "Make a data-heavy technical catalogue readable: tables, diagrams and SKUs without visual noise.",
    },
    solution: {
      ru: "Строгая система таблиц и инфографики, акцентный цвет только для навигации — информация находится за секунды.",
      en: "A strict table and infographic system with accent colour reserved for navigation — any spec is found in seconds.",
    },
    images: ["images/works/catalog-3/01.svg", "images/works/catalog-3/02.svg"],
  },
  {
    id: "site-1",
    index: "05",
    year: "2025",
    type: { ru: "Сайт · вайбкодинг", en: "Website · vibe-coding" },
    title: { ru: "КУРС — 3D-нивелирование", en: "KURS — 3D Machine Control" },
    tools: ["Figma", "React", "AI"],
    cover: "images/works/site-1/cover.jpg",
    brief: {
      ru: "Сделать живой продуктовый лендинг для КУРС (ГСИ) — отечественных 3D-систем нивелирования для бульдозеров, экскаваторов и грейдеров. Сайт должен внушать доверие и вести к заявке.",
      en: "Build a live product landing for KURS (GSI) — Russian 3D machine-control systems for bulldozers, excavators and graders. It has to feel trustworthy and drive enquiries.",
    },
    solution: {
      ru: "Дизайн и быстрая сборка на React/Vite в подходе вайбкодинга: видео-герой со спецтехникой, разделы по типам машин, новости и галерея, формы заявок с интеграцией CRM. Сайт в продакшене на боевом домене.",
      en: "Design and a rapid React/Vite build in a vibe-coding workflow: a video hero with heavy machinery, sections per machine type, news and gallery, and lead forms wired to a CRM. Live in production on its own domain.",
    },
    images: [
      {
        type: "embed",
        url: "https://kurs-gsi.ru/",
        label: "kurs-gsi.ru",
        poster: "images/works/site-1/cover.jpg",
        caption: { ru: "Живой сайт", en: "Live site" },
        note: {
          ru: "Это не скриншот — прямо здесь работает живой сайт. Прокручивайте и кликайте внутри рамки или откройте в новой вкладке.",
          en: "Not a screenshot — the live site runs right here. Scroll and click inside the frame, or open it in a new tab.",
        },
      },
    ],
  },
  {
    id: "site-2",
    index: "06",
    year: "2025",
    type: { ru: "Сайт · вайбкодинг", en: "Website · vibe-coding" },
    title: { ru: "Промо-сайт", en: "Promo Site" },
    tools: ["Figma", "AI"],
    cover: "images/works/site-2/cover.svg",
    brief: {
      ru: "Сделать промо-сайт мероприятия с акцентом на атмосферу и понятным призывом к действию.",
      en: "Create an event promo site focused on atmosphere with a clear call to action.",
    },
    solution: {
      ru: "Цельная визуальная история, интерактивные акценты и AI-сборка позволили запустить страницу в короткий срок.",
      en: "A cohesive visual story, interactive accents and an AI-driven build shipped the page in a short timeframe.",
    },
    images: ["images/works/site-2/01.svg", "images/works/site-2/02.svg"],
  },
  {
    id: "poster",
    index: "07",
    year: "2024",
    type: { ru: "Афиша", en: "Poster" },
    title: { ru: "Афиша события", en: "Event Poster" },
    tools: ["Illustrator", "Photoshop", "AI"],
    cover: "images/works/poster/cover.jpg",
    brief: {
      ru: "Создать афишу, которая считывается за секунду издалека и держит внимание вблизи.",
      en: "Create a poster that reads in a second from afar and rewards a closer look.",
    },
    solution: {
      ru: "Сильный типографический образ, контрастная композиция и фактура — плакат работает и на стене, и в ленте.",
      en: "A strong typographic image, contrast composition and texture — the poster works both on a wall and in a feed.",
    },
    images: [
      {
        src: "images/works/poster/poster.png",
        feature: true,
        caption: { ru: "Афиша", en: "Poster" },
        note: {
          ru: "Главный визуальный образ события: крупная типографика и плотная композиция считываются издалека, а фактура и детали удерживают внимание вблизи.",
          en: "The event's main visual: bold type and a dense composition read from afar, while texture and detail reward a closer look.",
        },
      },
      { src: "images/works/poster/mockup-stop.jpg", caption: { ru: "Остановка", en: "Bus stop" } },
      { src: "images/works/poster/mockup-metro.jpg", caption: { ru: "Метро", en: "Metro" } },
      { src: "images/works/poster/mockup-dk.jpg", caption: { ru: "Дом культуры", en: "House of Culture" } },
    ],
  },
];

window.I18N = {
  ru: {
    "nav.works": "Работы",
    "nav.about": "Обо мне",
    "nav.contact": "Контакты",
    "hero.eyebrow": "Портфолио — Yutouka.design",
    "hero.line1": "Дизайнер",
    "hero.line2a": "и ",
    "hero.line2b": "вайбкодер",
    "hero.lead":
      "Графический и цифровой дизайн: от печатных каталогов и афиш до сайтов на вайбкодинге. Работаю с идеей, типографикой и деталями.",
    "hero.scroll": "Листай вниз",
    "marquee.tagline": "Доступна для проектов",
    "works.eyebrow": "Избранное · 2024—2025",
    "works.title": "Работы",
    "works.count": "Семь проектов",
    "about.eyebrow": "Обо мне",
    "about.title1": "Начинающий дизайнер",
    "about.title2": "с подходом ",
    "about.title2em": "вайбкодера",
    "about.p1":
      "Я Yutouka — графический и цифровой дизайнер. Работаю на стыке печати и веба: календари, каталоги, афиши и сайты.",
    "about.p2":
      "Мне важно довести каждый проект до уровня, на котором не стыдно поставить подпись: ясная структура, аккуратная типографика и характер.",
    "about.toolsLabel": "Инструменты",
    "contact.eyebrow": "Давайте поработаем",
    "contact.cta": "Напишите мне",
    "footer.rights": "Все права защищены",
    "footer.made": "Дизайн и сборка — Yutouka.design",
    "case.back": "Назад к работам",
    "case.year": "Год",
    "case.type": "Тип",
    "case.tools": "Инструменты",
    "case.briefLabel": "Задача",
    "case.solutionLabel": "Решение",
    "case.next": "Следующий проект",
    "case.notFound": "Проект не найден",
  },
  en: {
    "nav.works": "Works",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Portfolio — Yutouka.design",
    "hero.line1": "Designer",
    "hero.line2a": "& ",
    "hero.line2b": "vibe-coder",
    "hero.lead":
      "Graphic and digital design: from print catalogues and posters to vibe-coded websites. I work with the idea, the type and the details.",
    "hero.scroll": "Scroll down",
    "marquee.tagline": "Available for work",
    "works.eyebrow": "Selected · 2024—2025",
    "works.title": "Works",
    "works.count": "Seven projects",
    "about.eyebrow": "About",
    "about.title1": "An emerging designer",
    "about.title2": "with a ",
    "about.title2em": "vibe-coder",
    "about.p1":
      "I'm Yutouka — a graphic and digital designer working where print meets web: calendars, catalogues, posters and websites.",
    "about.p2":
      "I care about taking every project to a level worth signing: clear structure, careful typography and character.",
    "about.toolsLabel": "Tools",
    "contact.eyebrow": "Let's work together",
    "contact.cta": "Get in touch",
    "footer.rights": "All rights reserved",
    "footer.made": "Designed & built by Yutouka.design",
    "case.back": "Back to works",
    "case.year": "Year",
    "case.type": "Type",
    "case.tools": "Tools",
    "case.briefLabel": "Brief",
    "case.solutionLabel": "Solution",
    "case.next": "Next project",
    "case.notFound": "Project not found",
  },
};

window.SITE = {
  email: "hello@yutouka.design",
  socials: [
    { label: "Behance", url: "https://behance.net" },
    { label: "Telegram", url: "https://t.me/" },
    { label: "Instagram", url: "https://instagram.com" },
  ],
};
