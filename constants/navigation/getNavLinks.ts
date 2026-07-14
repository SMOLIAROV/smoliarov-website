import type { Dictionary } from "@/lib/i18n/dictionaries"

import { NAVIGATION } from "./navigation"

export function getNavLinks(dict: Dictionary) {
  return [
    { name: dict.navigation.solutions, href: `#${NAVIGATION.SOLUTIONS}` },
    { name: dict.navigation.worflow, href: `#${NAVIGATION.WORKFLOW}` },
    { name: dict.navigation.reviews, href: `#${NAVIGATION.REVIEWS}` },
    { name: dict.navigation.contact, href: `#${NAVIGATION.CONTACT_FORM}` },
    { name: dict.navigation.faq, href: `#${NAVIGATION.FAQ}` },
  ] as const
}
