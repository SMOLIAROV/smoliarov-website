export const i18n = {
  defaultLocale: "ru",
  locales: ["ru", "en"] as const,
  intl: {
    ru: "ru-RU",
    en: "en-US",
  },
} as const

export type Locale = (typeof i18n.locales)[number]

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale)
}

export function getOtherLocale(locale: Locale): Locale {
  return i18n.locales.find((item) => item !== locale) ?? i18n.defaultLocale
}
