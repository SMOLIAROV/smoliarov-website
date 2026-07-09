import type { Dictionary } from "@/lib/i18n/dictionaries"

import { LEGAL } from "./legal"
import { Locale } from "@/lib/i18n/config"

export function getLegalLinks(dict: Dictionary, locale: Locale) {
  return [
    {
      slug: LEGAL.PRIVACY,
      label: dict.common.legal.privacy,
      href: `/${locale}/legal/${LEGAL.PRIVACY}`,
    },
    {
      slug: LEGAL.COOKIES,
      label: dict.common.legal.cookies,
      href: `/${locale}/legal/${LEGAL.PRIVACY}`,
    },
    {
      slug: LEGAL.OFFER,
      label: dict.common.legal.offer,
      href: `/${locale}/legal/${LEGAL.PRIVACY}`,
    },
  ] as const
}
