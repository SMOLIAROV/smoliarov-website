import { Code2, Globe, MessageSquare, Settings, Zap } from "lucide-react"
import WebsiteImage from "@/public/images/solutions/sites.webp"
import ServiceImage from "@/public/images/solutions/services.webp"
import BotImage from "@/public/images/solutions/bots.webp"
import AutomationImage from "@/public/images/solutions/automation.webp"
import CustomImage from "@/public/images/solutions/custom.webp"
import { Dictionary } from "@/lib/i18n/dictionaries"

export const SOLUTION_TYPES = {
  WEBSITE: "website",
  SERVICE: "service",
  BOT: "bot",
  AUTOMATION: "automation",
  CUSTOM: "custom",
} as const

export const SOLUTION_TYPE_VALUES = Object.values(SOLUTION_TYPES)

export const isSolutionType = (type: string): boolean =>
  Object.values(SOLUTION_TYPES).includes(
    type as (typeof SOLUTION_TYPES)[keyof typeof SOLUTION_TYPES]
  )

export const SOLUTIONS = (dict: Dictionary) => ({
  website: {
    solution_type: SOLUTION_TYPES.WEBSITE,
    icon: Globe,
    image: WebsiteImage.src,

    content: {
      title: dict.solutions.items.websites.title,
      description: dict.solutions.items.websites.description,
    },
  },
  service: {
    solution_type: SOLUTION_TYPES.SERVICE,
    icon: Zap,
    image: ServiceImage.src,

    content: {
      title: dict.solutions.items.web_apps.title,
      description: dict.solutions.items.web_apps.description,
    },
  },
  bot: {
    solution_type: SOLUTION_TYPES.BOT,
    icon: MessageSquare,
    image: BotImage.src,

    content: {
      title: dict.solutions.items.telegram_bots.title,
      description: dict.solutions.items.telegram_bots.description,
    },
  },
  automation: {
    solution_type: SOLUTION_TYPES.AUTOMATION,
    icon: Settings,
    image: AutomationImage.src,

    content: {
      title: dict.solutions.items.automation.title,
      description: dict.solutions.items.automation.description,
    },
  },
  custom: {
    solution_type: SOLUTION_TYPES.CUSTOM,
    icon: Code2,
    image: CustomImage.src,

    content: {
      title: dict.solutions.items.custom.title,
      description: dict.solutions.items.custom.description,
    },
  },
})

export function getSolution({
  dict,
  solution_type,
}: {
  dict: Dictionary
  solution_type: string
}) {
  const solutions = SOLUTIONS(dict)

  const solution = solution_type ? solutions[solution_type] : null

  return solution
}
