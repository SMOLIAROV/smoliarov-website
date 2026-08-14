import { LEGAL_SLUGS } from "@/constants/legal/legal"
import { ROUTES } from "@/constants/routes"
import { Dictionary } from "../i18n/dictionaries"
import { Locale } from "../i18n/config"
import { SOLUTION_TYPES } from "@/constants/solution/solution.data"

export const metadataConfigs = {
  home: {
    route: ROUTES.home,

    title: (dict: Dictionary) => dict.metadata.home.title,

    description: (dict: Dictionary) => dict.metadata.home.description,

    keywords: [
      "разработка сайтов",
      "создание сайтов",
      "разработка сайта под ключ",
      "заказать сайт",
      "сайт для бизнеса",
      "разработка веб-сайтов",
      "разработка веб-приложений",
      "веб-сервисы для бизнеса",
      "разработка сервисов",
      "разработка CRM",
      "CRM для бизнеса",
      "автоматизация бизнеса",
      "автоматизация процессов",
      "автоматизация продаж",
      "цифровизация бизнеса",
      "разработка программного обеспечения",
      "заказная разработка",
      "индивидуальная разработка",
      "Telegram-боты",
      "разработка Telegram-ботов",

      "web development",
      "website development",
      "web development company",
      "website development company",
      "custom website development",
      "business website development",
      "web application development",
      "web app development",
      "web services development",
      "business software development",
      "custom software development",
      "CRM development",
      "business automation",
      "process automation",
      "sales automation",
      "digital transformation",
      "custom software",
      "Telegram bot development",
      "business automation solutions",
    ],
  },

  reviews: {
    route: ROUTES.reviews,

    title: (dict: Dictionary) => dict.metadata.reviews.title,

    description: (dict: Dictionary) => dict.metadata.reviews.description,

    keywords: [
      "отзывы о разработке сайтов",
      "отзывы SMOLIAROV",
      "разработка сайтов отзывы",
    ],
  },

  solution: {
    website: {
      route: (locale: Locale) =>
        ROUTES.solution(locale, SOLUTION_TYPES.WEBSITE),

      title: (dict: Dictionary) => dict.metadata.solution.website.title,

      description: (dict: Dictionary) =>
        dict.metadata.solution.website.description,

      keywords: [
        "разработка сайтов",
        "создание сайтов",
        "разработка сайта под ключ",
        "заказать сайт",
        "сайт для бизнеса",
        "сайт компании",
        "корпоративный сайт",
        "разработка корпоративного сайта",
        "создание корпоративного сайта",
        "лендинг под ключ",
        "разработка лендинга",
        "сайт-каталог",
        "разработка сайта-каталога",
        "адаптивный сайт",
        "современный сайт",

        "website development",
        "web development",
        "website development company",
        "custom website development",
        "business website",
        "business website development",
        "corporate website development",
        "corporate website",
        "landing page development",
        "landing page design",
        "custom website",
        "responsive website development",
        "professional website development",
      ],
    },
    service: {
      route: (locale: Locale) =>
        ROUTES.solution(locale, SOLUTION_TYPES.SERVICE),

      title: (dict: Dictionary) => dict.metadata.solution.service.title,

      description: (dict: Dictionary) =>
        dict.metadata.solution.service.description,

      keywords: [
        "разработка веб-сервисов",
        "разработка веб-приложений",
        "веб-приложение",
        "веб-сервис",
        "онлайн-сервис",
        "сервис для бизнеса",
        "разработка онлайн-сервиса",
        "разработка платформы",
        "онлайн-платформа",
        "личный кабинет",
        "личный кабинет для бизнеса",
        "клиентский портал",
        "корпоративная система",
        "внутренняя система",
        "разработка SaaS",
        "SaaS разработка",

        "web application development",
        "web app development",
        "web service development",
        "web platform development",
        "online platform development",
        "business web application",
        "business web service",
        "custom web application",
        "customer portal development",
        "client portal development",
        "user dashboard development",
        "SaaS development",
        "SaaS application development",
        "business software development",
      ],
    },
    bot: {
      route: (locale: Locale) => ROUTES.solution(locale, SOLUTION_TYPES.BOT),

      title: (dict: Dictionary) => dict.metadata.solution.bot.title,

      description: (dict: Dictionary) => dict.metadata.solution.bot.description,

      keywords: [
        "разработка Telegram-ботов",
        "Telegram-бот для бизнеса",
        "Telegram бот для бизнеса",
        "заказать Telegram-бота",
        "создание Telegram-бота",
        "разработка бота Telegram",
        "бот для автоматизации",
        "автоматизация через Telegram",
        "Telegram автоматизация",
        "бот для продаж",
        "бот для заявок",
        "бот для клиентов",
        "Telegram CRM бот",
        "интеграция Telegram",

        "Telegram bot development",
        "Telegram bot for business",
        "business Telegram bot",
        "custom Telegram bot",
        "Telegram bot development company",
        "Telegram automation",
        "Telegram business automation",
        "Telegram bot integration",
        "Telegram sales bot",
        "Telegram customer support bot",
        "Telegram CRM bot",
      ],
    },
    automation: {
      route: (locale: Locale) =>
        ROUTES.solution(locale, SOLUTION_TYPES.AUTOMATION),

      title: (dict: Dictionary) => dict.metadata.solution.automation.title,

      description: (dict: Dictionary) =>
        dict.metadata.solution.automation.description,

      keywords: [
        "автоматизация бизнеса",
        "автоматизация бизнес-процессов",
        "автоматизация процессов",
        "автоматизация работы",
        "автоматизация продаж",
        "автоматизация заявок",
        "автоматизация учета",
        "автоматизация компании",
        "цифровизация бизнеса",
        "оптимизация бизнес-процессов",
        "автоматизация рутинных задач",
        "интеграция сервисов",
        "интеграция CRM",
        "автоматизация CRM",
        "разработка системы автоматизации",

        "business automation",
        "business process automation",
        "process automation",
        "workflow automation",
        "sales automation",
        "business process optimization",
        "business automation software",
        "workflow management",
        "CRM automation",
        "CRM integration",
        "software integration",
        "business process management",
        "digital business automation",
      ],
    },
    custom: {
      route: (locale: Locale) => ROUTES.solution(locale, SOLUTION_TYPES.CUSTOM),

      title: (dict: Dictionary) => dict.metadata.solution.custom.title,

      description: (dict: Dictionary) =>
        dict.metadata.solution.custom.description,

      keywords: [
        "индивидуальная разработка",
        "заказная разработка",
        "заказная разработка ПО",
        "разработка программного обеспечения",
        "разработка ПО под заказ",
        "разработка системы для бизнеса",
        "разработка IT решения",
        "IT решения для бизнеса",
        "индивидуальное программное обеспечение",
        "нестандартная разработка",
        "разработка цифрового продукта",
        "разработка продукта под заказ",
        "автоматизация под заказ",

        "custom software development",
        "custom software development company",
        "bespoke software development",
        "software development services",
        "custom business software",
        "custom business solutions",
        "business software development",
        "custom IT solutions",
        "custom digital solutions",
        "software development company",
        "custom application development",
        "tailored software solutions",
      ],
    },
  },

  legal: {
    privacy: {
      route: (locale: Locale) => ROUTES.legal(locale, LEGAL_SLUGS.PRIVACY),

      title: (dict: Dictionary) => dict.metadata.legal.privacy.title,

      description: (dict: Dictionary) =>
        dict.metadata.legal.privacy.description,

      keywords: ["политика конфиденциальности", "SMOLIAROV"],
    },

    cookies: {
      route: (locale: Locale) => ROUTES.legal(locale, LEGAL_SLUGS.COOKIES),

      title: (dict: Dictionary) => dict.metadata.legal.cookies.title,

      description: (dict: Dictionary) =>
        dict.metadata.legal.cookies.description,

      keywords: ["политика cookie", "SMOLIAROV"],
    },

    offer: {
      route: (locale: Locale) => ROUTES.legal(locale, LEGAL_SLUGS.OFFER),

      title: (dict: Dictionary) => dict.metadata.legal.offer.title,

      description: (dict: Dictionary) => dict.metadata.legal.offer.description,

      keywords: ["публичная оферта", "SMOLIAROV"],
    },

    free_domain_and_hosting: {
      route: (locale: Locale) =>
        ROUTES.legal(locale, LEGAL_SLUGS.PROMO__FREE_DOMAIN_AND_HOSTING),

      title: (dict: Dictionary) =>
        dict.metadata.legal.free_domain_and_hosting.title,

      description: (dict: Dictionary) =>
        dict.metadata.legal.free_domain_and_hosting.description,

      keywords: ["условия акции", "SMOLIAROV"],
    },
  },
} as const
