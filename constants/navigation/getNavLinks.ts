import type { Dictionary } from "@/lib/i18n/dictionaries"

import { NAVIGATION } from "./navigation"

export function getNavLinks(dict: Dictionary) {
  return [
    { name: dict.navigation.services, href: NAVIGATION.SERVICES },
    { name: dict.navigation.examples, href: NAVIGATION.EXAMPLES },
    { name: dict.navigation.process, href: NAVIGATION.PROCESS },
    { name: dict.navigation.why_us, href: NAVIGATION.WHY_US },
    { name: dict.navigation.faq, href: NAVIGATION.FAQ },
    { name: dict.navigation.reviews, href: NAVIGATION.REVIEWS },
    { name: dict.navigation.contact, href: NAVIGATION.CONTACT_FORM },
  ] as const
}
