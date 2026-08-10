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
      "разработка CRM",
      "CRM для бизнеса",
      "автоматизация бизнеса",
      "Telegram-боты",
      "разработка Telegram-ботов",
      "веб-приложения",
      "автоматизация продаж",
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

      title: (dict: Dictionary) => dict.common.solution_type.website.title,

      description: (dict: Dictionary) =>
        dict.common.solution_type.website.description,

      keywords: ["Сайты", "SMOLIAROV"],
    },
    service: {
      route: (locale: Locale) =>
        ROUTES.solution(locale, SOLUTION_TYPES.SERVICE),

      title: (dict: Dictionary) => dict.common.solution_type.service.title,

      description: (dict: Dictionary) =>
        dict.common.solution_type.service.description,

      keywords: ["Сервисы", "SMOLIAROV"],
    },
    bot: {
      route: (locale: Locale) => ROUTES.solution(locale, SOLUTION_TYPES.BOT),

      title: (dict: Dictionary) => dict.common.solution_type.bot.title,

      description: (dict: Dictionary) =>
        dict.common.solution_type.bot.description,

      keywords: ["Telegram-боты", "SMOLIAROV"],
    },
    automation: {
      route: (locale: Locale) =>
        ROUTES.solution(locale, SOLUTION_TYPES.AUTOMATION),

      title: (dict: Dictionary) => dict.common.solution_type.automation.title,

      description: (dict: Dictionary) =>
        dict.common.solution_type.automation.description,

      keywords: ["Автоматизация", "SMOLIAROV"],
    },
    custom: {
      route: (locale: Locale) => ROUTES.solution(locale, SOLUTION_TYPES.CUSTOM),

      title: (dict: Dictionary) => dict.common.solution_type.custom.title,

      description: (dict: Dictionary) =>
        dict.common.solution_type.custom.description,

      keywords: ["Индивидуальная разработка", "SMOLIAROV"],
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
