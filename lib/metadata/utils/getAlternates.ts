import { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

export function getAlternates(
  route: (_locale: Locale) => string,
  locale: Locale
): Metadata["alternates"] {
  return {
    canonical: `${siteUrl}${route(locale)}`,

    languages: {
      "ru-RU": `${siteUrl}${route("ru")}`,
      "en-US": `${siteUrl}${route("en")}`,
    },
  }
}
