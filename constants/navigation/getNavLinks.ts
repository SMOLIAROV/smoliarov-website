import type { Dictionary } from "@/lib/i18n/dictionaries"

export function getNavLinks(i18n: Dictionary) {
  return [
    { name: i18n.navigation.services, href: "#services" },
    { name: i18n.navigation.examples, href: "#examples" },
    { name: i18n.navigation.process, href: "#process" },
    { name: i18n.navigation.why_us, href: "#why_us" },
    { name: i18n.navigation.faq, href: "#faq" },
    { name: i18n.navigation.reviews, href: "#reviews" },
    { name: i18n.navigation.contact, href: "#contact" },
  ] as const
}
