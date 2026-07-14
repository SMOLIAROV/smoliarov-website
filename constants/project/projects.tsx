import { Dictionary } from "@/lib/i18n/dictionaries"

export const PROJECT_TYPES = {
  WEBSITE: "website",
  SERVICE: "service",
  BOT: "bot",
  AUTOMATION: "automation",
  CUSTOM: "custom"
} as const

export const projects = (dict: Dictionary) => [
  {
    slug: PROJECT_TYPES.WEBSITE,
    label: dict.common.project_types.website,
  },
  {
    slug: PROJECT_TYPES.SERVICE,
    label: dict.common.project_types.service,
  },
  {
    slug: PROJECT_TYPES.BOT,
    label: dict.common.project_types.bot,
  },
  {
    slug: PROJECT_TYPES.AUTOMATION,
    label: dict.common.project_types.automation,
  },
  {
    slug: PROJECT_TYPES.CUSTOM,
    label: dict.common.project_types.custom,
  },
]