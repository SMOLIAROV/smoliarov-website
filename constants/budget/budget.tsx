import { Dictionary } from "@/lib/i18n/dictionaries"

export const BUDGET_TYPES = {
  SMALL: 100,
  MEDIUM: 500,
  LARGE: 1000,
  EXTRA_LARGE: 5000,
} as const

const currency = process.env.NEXT_PUBLIC_CURRENCY!

export const budgets = (dict: Dictionary) => [
  {
    slug: "small",
    label: `${dict.common.up_to} ${BUDGET_TYPES.SMALL} ${currency}`,
  },
  {
    slug: "medium",
    label: `${BUDGET_TYPES.SMALL} ${currency} - ${BUDGET_TYPES.MEDIUM} ${currency}`,
  },
  {
    slug: "large",
    label: `${BUDGET_TYPES.MEDIUM} ${currency} - ${BUDGET_TYPES.LARGE} ${currency}`,
  },
  {
    slug: "extra_large",
    label: `${BUDGET_TYPES.LARGE} ${currency} - ${BUDGET_TYPES.EXTRA_LARGE} ${currency}`,
  },
  {
    slug: "unlimited",
    label: `${dict.common.more_then} ${BUDGET_TYPES.EXTRA_LARGE} ${currency}`,
  },
]
