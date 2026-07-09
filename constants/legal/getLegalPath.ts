import type { Locale } from "@/lib/i18n/config"

import type { LegalSlug } from "./legal"

export function getLegalPath(locale: Locale, slug: LegalSlug) {
  return `/${locale}/legal/${slug}`
}
