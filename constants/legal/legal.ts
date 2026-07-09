export const LEGAL = {
  PRIVACY: "privacy",
  COOKIES: "cookies",
  OFFER: "offer",
} as const

export type LegalSlug = (typeof LEGAL)[keyof typeof LEGAL]
