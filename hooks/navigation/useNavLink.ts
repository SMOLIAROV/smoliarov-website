"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { NAVIGATION_SLUG } from "../../constants/navigation/navigation"

export function useNavLink(key: string) {
  const dict = useDict()

  const config = {
    solutions: {
      name: dict.navigation.solutions,
      href: `#${NAVIGATION_SLUG.SOLUTIONS}`,
    },
    worklow: {
      name: dict.navigation.worflow,
      href: `#${NAVIGATION_SLUG.WORKFLOW}`,
    },
    reviews: {
      name: dict.navigation.reviews,
      href: `#${NAVIGATION_SLUG.REVIEWS}`,
    },
    contact_form: {
      name: dict.navigation.contact,
      href: `#${NAVIGATION_SLUG.CONTACT_FORM}`,
    },
    faq: { name: dict.navigation.faq, href: `#${NAVIGATION_SLUG.FAQ}` },
  } as const

  return config[key]
}
