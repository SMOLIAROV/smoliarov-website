import { LEGAL_SLUGS } from "@/constants/legal/legal"
import { ROUTES } from "@/constants/routes"
import { Dictionary } from "../i18n/dictionaries"
import { Locale } from "../i18n/config"

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
