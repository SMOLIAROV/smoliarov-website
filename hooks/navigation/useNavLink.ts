"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { NAVIGATION } from "../../constants/navigation/navigation"

export function useNavLink(key: string) {
  const dict = useDict()

  const config = {
    services: {
      name: dict.navigation.services,
      href: `#${NAVIGATION.SERVICES}`,
    },
    examples: {
      name: dict.navigation.examples,
      href: `#${NAVIGATION.EXAMPLES}`,
    },
    worklow: { name: dict.navigation.worflow, href: `#${NAVIGATION.WORKFLOW}` },
    why_us: { name: dict.navigation.why_us, href: `#${NAVIGATION.WHY_US}` },
    faq: { name: dict.navigation.faq, href: `#${NAVIGATION.FAQ}` },
    reviews: { name: dict.navigation.reviews, href: `#${NAVIGATION.REVIEWS}` },
    contact: {
      name: dict.navigation.contact,
      href: `#${NAVIGATION.CONTACT_FORM}`,
    },
  } as const

  return config[key]
}
