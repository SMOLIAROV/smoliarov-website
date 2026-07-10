export const LEGAL_SLUGS = {
  PRIVACY: "privacy",
  COOKIES: "cookies",
  OFFER: "offer",
  PROMO: "promo",
} as const

export type LegalSlug = (typeof LEGAL_SLUGS)[keyof typeof LEGAL_SLUGS]

interface LegalDocMeta {
  slug: LegalSlug
  showInFooter: boolean
}

export const LEGAL_DOCS_META: LegalDocMeta[] = [
  { slug: LEGAL_SLUGS.PRIVACY, showInFooter: true },
  { slug: LEGAL_SLUGS.COOKIES, showInFooter: true },
  { slug: LEGAL_SLUGS.OFFER, showInFooter: true },
  { slug: LEGAL_SLUGS.PROMO, showInFooter: false },
]

export function isLegalSlug(value: string): value is LegalSlug {
  return LEGAL_DOCS_META.some((doc) => doc.slug === value)
}
