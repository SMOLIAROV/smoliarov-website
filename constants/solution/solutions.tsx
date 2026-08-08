import { Dictionary } from "@/lib/i18n/dictionaries"

export const SOLUTION_TYPES = {
  WEBSITE: "website",
  SERVICE: "service",
  BOT: "bot",
  AUTOMATION: "automation",
  CUSTOM: "custom",
} as const

export const SOLUTION_TYPE_VALUES = Object.values(SOLUTION_TYPES)

export const solutions = (dict: Dictionary) => [
  {
    slug: SOLUTION_TYPES.WEBSITE,
    label: dict.common.solution_type.website,
  },
  {
    slug: SOLUTION_TYPES.SERVICE,
    label: dict.common.solution_type.service,
  },
  {
    slug: SOLUTION_TYPES.BOT,
    label: dict.common.solution_type.bot,
  },
  {
    slug: SOLUTION_TYPES.AUTOMATION,
    label: dict.common.solution_type.automation,
  },
  {
    slug: SOLUTION_TYPES.CUSTOM,
    label: dict.common.solution_type.custom,
  },
]
