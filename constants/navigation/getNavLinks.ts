import type { Dictionary } from "@/lib/i18n/dictionaries"

import { NAVIGATION_SLUG } from "./navigation"

export function getNavLinks({
  dict,
  navigationType,
  sections,
}: {
  dict: Dictionary
  navigationType: string
  sections: string[]
}) {
  const NAVIGATION = {
    home: [
      {
        id: NAVIGATION_SLUG.SOLUTIONS,
        name: dict.navigation.solutions,
        href: `#${NAVIGATION_SLUG.SOLUTIONS}`,
      },
      {
        id: NAVIGATION_SLUG.WORKFLOW,
        name: dict.navigation.worflow,
        href: `#${NAVIGATION_SLUG.WORKFLOW}`,
      },
      {
        id: NAVIGATION_SLUG.REVIEWS,
        name: dict.navigation.reviews,
        href: `#${NAVIGATION_SLUG.REVIEWS}`,
      },
      {
        id: NAVIGATION_SLUG.CONTACT_FORM,
        name: dict.navigation.contact,
        href: `#${NAVIGATION_SLUG.CONTACT_FORM}`,
      },
      {
        id: NAVIGATION_SLUG.FAQ,
        name: dict.navigation.faq,
        href: `#${NAVIGATION_SLUG.FAQ}`,
      },
    ],

    solution: [
      {
        id: NAVIGATION_SLUG.ABOUT_SOLUTION,
        name: dict.solution_features.subtitle,
        href: `#${NAVIGATION_SLUG.ABOUT_SOLUTION}`,
      },
      {
        id: NAVIGATION_SLUG.PRICE,
        name: dict.solution_packages.title,
        href: `#${NAVIGATION_SLUG.PRICE}`,
      },
      {
        id: NAVIGATION_SLUG.REVIEWS,
        name: dict.navigation.reviews,
        href: `#${NAVIGATION_SLUG.REVIEWS}`,
      },
      {
        id: NAVIGATION_SLUG.CONTACT_FORM,
        name: dict.navigation.contact,
        href: `#${NAVIGATION_SLUG.CONTACT_FORM}`,
      },
    ],
  }
  return NAVIGATION[navigationType]
    .filter((item) => sections.includes(item.id))
    .map((item) => ({
      name: item.name,
      href: `#${item.id}`,
    }))
}
