import { Dictionary } from "@/lib/i18n/dictionaries"

export const BUDGET_TYPES = {
  SMALL: "100",
  MEDIUM: "500",
  LARGE: "1000",
  EXTRA_LARGE: "5000",
} as const


export const budgets = (dict: Dictionary) => [
    {
        slug: "small",
        label: `${dict.common.up_to} ${BUDGET_TYPES.SMALL} BYN`,
    },
    {
        slug: "medium",
        label: `${BUDGET_TYPES.SMALL} BYN - ${BUDGET_TYPES.MEDIUM} BYN`,
    },
    {
        slug: "large",
        label: `${BUDGET_TYPES.MEDIUM} BYN - ${BUDGET_TYPES.LARGE} BYN`,
    },
    {
        slug: "extra_large",
        label: `${BUDGET_TYPES.LARGE} BYN - ${BUDGET_TYPES.EXTRA_LARGE} BYN`,
    },
    {
        slug: "unlimited",
        label: `${dict.common.more_then} ${BUDGET_TYPES.EXTRA_LARGE} BYN`,
    },
]