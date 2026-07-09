import type { LegalSlug } from "@/constants/legal/legal"
import { getLegalLink } from "@/constants/legal/getLegalLinks"
import { useDict } from "./useDict"
import { useLocale } from "./useLocale"

export function useLegalLink(slug: LegalSlug) {
  const dict = useDict()
  const locale = useLocale()

  return getLegalLink(dict, locale, slug)
}
