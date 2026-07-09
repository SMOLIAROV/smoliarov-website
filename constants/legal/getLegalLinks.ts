import type { Dictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

import { getLegalPath } from "./getLegalPath"
import { LEGAL, type LegalSlug } from "./legal"

const legalLabels: Record<LegalSlug, (dict: Dictionary) => string> = {
  [LEGAL.PRIVACY]: (dict) => dict.common.legal.privacy,
  [LEGAL.COOKIES]: (dict) => dict.common.legal.cookies,
  [LEGAL.OFFER]: (dict) => dict.common.legal.offer,
}

export function getLegalLink(
  dict: Dictionary,
  locale: Locale,
  slug: LegalSlug
) {
  return {
    slug,
    label: legalLabels[slug](dict),
    href: getLegalPath(locale, slug),
  } as const
}

export function getLegalLinks(dict: Dictionary, locale: Locale) {
  return (Object.values(LEGAL) as LegalSlug[]).map((slug) =>
    getLegalLink(dict, locale, slug)
  )
}
