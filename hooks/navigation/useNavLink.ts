"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { NAVIGATION } from "../../constants/navigation/navigation"

export function useNavLink(key: string) {
  const dict = useDict()

  const config = {
    solutions: {
      name: dict.navigation.solutions,
      href: `#${NAVIGATION.SOLUTIONS}`,
    },
    worklow: { name: dict.navigation.worflow, href: `#${NAVIGATION.WORKFLOW}` },
    reviews: { name: dict.navigation.reviews, href: `#${NAVIGATION.REVIEWS}` },
    contact_form: {
      name: dict.navigation.contact,
      href: `#${NAVIGATION.CONTACT_FORM}`,
    },
    faq: { name: dict.navigation.faq, href: `#${NAVIGATION.FAQ}` },
  } as const

  return config[key]
}
