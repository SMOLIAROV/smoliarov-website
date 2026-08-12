import { Code2, Globe, MessageSquare, Settings, Zap } from "lucide-react"
import { Dictionary } from "@/lib/i18n/dictionaries"

import WebsitePreview from "@/public/images/solutions/previews/sites.webp"
import ServicePreview from "@/public/images/solutions/previews/services.webp"
import BotPreview from "@/public/images/solutions/previews/bots.webp"
import AutomationPreview from "@/public/images/solutions/previews/automation.webp"
import CustomPreview from "@/public/images/solutions/previews/custom.webp"

import WebsiteImage from "@/public/images/solutions/hero/sites.png"
import ServiceImage from "@/public/images/solutions/hero/services.png"
import BotImage from "@/public/images/solutions/hero/bots.png"
import AutomationImage from "@/public/images/solutions/hero/automation.png"
import CustomImage from "@/public/images/solutions/hero/custom.png"

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
    solutionType: SOLUTION_TYPES.WEBSITE,
    icon: Globe,
    preview: WebsitePreview.src,
    image: WebsiteImage.src,

    content: {
      title: dict.common.solution_type.website.title,
      description: dict.common.solution_type.website.description,
    },
  },
  service: {
    solutionType: SOLUTION_TYPES.SERVICE,
    icon: Zap,
    preview: ServicePreview.src,
    image: ServiceImage.src,

    content: {
      title: dict.common.solution_type.service.title,
      description: dict.common.solution_type.service.description,
    },
  },
  bot: {
    solutionType: SOLUTION_TYPES.BOT,
    icon: MessageSquare,
    preview: BotPreview.src,
    image: BotImage.src,

    content: {
      title: dict.common.solution_type.bot.title,
      description: dict.common.solution_type.bot.description,
    },
  },
  automation: {
    solutionType: SOLUTION_TYPES.AUTOMATION,
    icon: Settings,
    preview: AutomationPreview.src,
    image: AutomationImage.src,

    content: {
      title: dict.common.solution_type.automation.title,
      description: dict.common.solution_type.automation.description,
    },
  },
  custom: {
    solutionType: SOLUTION_TYPES.CUSTOM,
    icon: Code2,
    preview: CustomPreview.src,
    image: CustomImage.src,

    content: {
      title: dict.common.solution_type.custom.title,
      description: dict.common.solution_type.custom.description,
    },
  },
})

export function getSolution({
  dict,
  solutionType,
}: {
  dict: Dictionary
  solutionType: string
}) {
  const solutions = SOLUTIONS(dict)

  const solution = solutionType ? solutions[solutionType] : null

  return solution
}
