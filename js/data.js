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
    cover: "images/works/calendar/cover.svg",
    brief: {
      ru: "Создать настенный календарь на год, который остаётся актуальным украшением интерьера, а не просто сеткой дат.",
      en: "Design a yearly wall calendar that works as an interior object, not just a grid of dates.",
    },
    solution: {
      ru: "Двенадцать авторских разворотов с единой типографикой и сезонной палитрой. Сетка дат подчинена композиции, а не наоборот.",
      en: "Twelve custom spreads tied together by one type system and a seasonal palette. The date grid follows the composition, not the other way around.",
    },
    images: ["images/works/calendar/01.svg", "images/works/calendar/02.svg"],
  },
  {
    id: "catalog-1",
    index: "02",
    year: "2025",
    type: { ru: "Каталог", en: "Catalogue" },
    title: { ru: "Каталог продукции", en: "Product Catalogue" },
    tools: ["InDesign", "Photoshop", "Illustrator"],
    cover: "images/works/catalog-1/cover.svg",
    brief: {
      ru: "Систематизировать большой ассортимент в печатном каталоге, где легко ориентироваться и приятно листать.",
      en: "Organise a large product range into a print catalogue that is easy to navigate and pleasant to browse.",
    },
    solution: {
      ru: "Модульная сетка, ясная иерархия разделов и спокойная вёрстка дают воздух каждому товару и держат ритм на всём объёме.",
      en: "A modular grid, clear section hierarchy and calm layout give every product room to breathe and keep the rhythm across the whole book.",
    },
    images: ["images/works/catalog-1/01.svg", "images/works/catalog-1/02.svg"],
  },
  {
    id: "catalog-2",
    index: "03",
    year: "2025",
    type: { ru: "Каталог", en: "Catalogue" },
    title: { ru: "Имиджевый каталог", en: "Lookbook Catalogue" },
    tools: ["InDesign", "Photoshop", "AI"],
    cover: "images/works/catalog-2/cover.svg",
    brief: {
      ru: "Передать характер бренда через имиджевый каталог, где фотография и текст работают на одно настроение.",
      en: "Convey a brand's character through a lookbook where imagery and copy build a single mood.",
    },
    solution: {
      ru: "Крупные кадры на разворот, лаконичные подписи и продуманные паузы между сценами создают повествование, а не перечень.",
      en: "Full-spread imagery, restrained captions and deliberate pauses between scenes turn the book into a narrative rather than a list.",
    },
    images: ["images/works/catalog-2/01.svg", "images/works/catalog-2/02.svg"],
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
    title: { ru: "Сайт-лендинг", en: "Landing Site" },
    tools: ["Figma", "AI", "Photoshop"],
    cover: "images/works/site-1/cover.svg",
    brief: {
      ru: "Собрать выразительный лендинг от макета до живой страницы, соединяя дизайн и AI-вайбкодинг.",
      en: "Build an expressive landing page from concept to live site, blending design with AI vibe-coding.",
    },
    solution: {
      ru: "Дизайн в Figma и быстрая сборка с помощью AI: смелая типографика, плавные анимации и адаптивность из коробки.",
      en: "Design in Figma plus rapid AI-assisted build: bold type, smooth motion and responsiveness out of the box.",
    },
    images: ["images/works/site-1/01.svg", "images/works/site-1/02.svg"],
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
    cover: "images/works/poster/cover.svg",
    brief: {
      ru: "Создать афишу, которая считывается за секунду издалека и держит внимание вблизи.",
      en: "Create a poster that reads in a second from afar and rewards a closer look.",
    },
    solution: {
      ru: "Сильный типографический образ, контрастная композиция и фактура — плакат работает и на стене, и в ленте.",
      en: "A strong typographic image, contrast composition and texture — the poster works both on a wall and in a feed.",
    },
    images: ["images/works/poster/01.svg", "images/works/poster/02.svg"],
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
    "hero.line2b": "специалист",
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
    "about.title2em": "специалиста",
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
    "hero.line2b": "specialist",
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
    "about.title2em": "specialist",
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
