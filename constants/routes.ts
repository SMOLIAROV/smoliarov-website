import { Locale } from "@/lib/i18n/config"

export const ROUTES = {
  home: (locale: Locale) => `/${locale}`,
  legal: (locale: Locale, slug: string) => `/${locale}/legal/${slug}`,
  reviews: (locale: Locale) => `/${locale}/reviews`,
  solutions: (locale: Locale, slug: string) => `/${locale}/solutions/${slug}`,
} as const
