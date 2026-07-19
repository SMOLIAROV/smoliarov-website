import type { Dictionary } from "@/lib/i18n/dictionaries"

import { LEGAL_DOCS_META, type LegalSlug } from "./legal"

export function getLegalDocs(dict: Dictionary) {
  return LEGAL_DOCS_META.map((doc) => ({
    slug: doc.slug,
    title: dict.common.legal[doc.slug],
    showInFooter: doc.showInFooter,
  }))
}

export function getFooterLegalDocs(dict: Dictionary) {
  return getLegalDocs(dict).filter((doc) => doc.showInFooter)
}

export function getLegalDoc(dict: Dictionary, slug: LegalSlug) {
  return getLegalDocs(dict).find((doc) => doc.slug === slug)
}
