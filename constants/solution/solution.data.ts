import {
  BarChart3,
  Bell,
  Clock,
  Code2,
  Database,
  Gauge,
  Globe,
  LayoutDashboard,
  MessageCircle,
  MessageSquare,
  Palette,
  Plug,
  Puzzle,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react"
import { Dictionary } from "@/lib/i18n/dictionaries"

import WebsitePreview from "@/public/images/solutions/previews/sites.webp"
import ServicePreview from "@/public/images/solutions/previews/services.webp"
import BotPreview from "@/public/images/solutions/previews/bots.webp"
import AutomationPreview from "@/public/images/solutions/previews/automation.webp"
import CustomPreview from "@/public/images/solutions/previews/custom.webp"

import WebsiteImage from "@/public/images/solutions/hero/sites.webp"
import ServiceImage from "@/public/images/solutions/hero/services.webp"
import BotImage from "@/public/images/solutions/hero/bots.webp"
import AutomationImage from "@/public/images/solutions/hero/automation.webp"
import CustomImage from "@/public/images/solutions/hero/custom.webp"

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
      ...dict.common.solution_type.website,
    },

    feature: {
      description: dict.solution_features.features.website.description,
      items: [
        {
          icon: Smartphone,
          ...dict.solution_features.features.website.items.responsive,
        },
        {
          icon: Palette,
          ...dict.solution_features.features.website.items.design,
        },
        {
          icon: Gauge,
          ...dict.solution_features.features.website.items.performance,
        },
        {
          icon: Search,
          ...dict.solution_features.features.website.items.seo,
        },
        {
          icon: Server,
          ...dict.solution_features.features.website.items.backend,
        },
      ],
    },
  },
  service: {
    solutionType: SOLUTION_TYPES.SERVICE,
    icon: Zap,
    preview: ServicePreview.src,
    image: ServiceImage.src,

    content: {
      ...dict.common.solution_type.service,
    },

    feature: {
      description: dict.solution_features.features.service.description,
      items: [
        {
          icon: LayoutDashboard,
          ...dict.solution_features.features.service.items.interface,
        },
        {
          icon: Database,
          ...dict.solution_features.features.service.items.data,
        },
        {
          icon: ShieldCheck,
          ...dict.solution_features.features.service.items.auth,
        },
        {
          icon: Plug,
          ...dict.solution_features.features.service.items.integrations,
        },
        {
          icon: BarChart3,
          ...dict.solution_features.features.service.items.scalability,
        },
      ],
    },
  },
  bot: {
    solutionType: SOLUTION_TYPES.BOT,
    icon: MessageSquare,
    preview: BotPreview.src,
    image: BotImage.src,

    content: {
      ...dict.common.solution_type.bot,
    },

    feature: {
      description: dict.solution_features.features.bot.description,
      items: [
        {
          icon: MessageCircle,
          ...dict.solution_features.features.bot.items.scenarios,
        },
        {
          icon: Database,
          ...dict.solution_features.features.bot.items.data,
        },
        {
          icon: Plug,
          ...dict.solution_features.features.bot.items.integrations,
        },
        {
          icon: Zap,
          ...dict.solution_features.features.bot.items.automation,
        },
      ],
    },
  },
  automation: {
    solutionType: SOLUTION_TYPES.AUTOMATION,
    icon: Settings,
    preview: AutomationPreview.src,
    image: AutomationImage.src,

    content: {
      ...dict.common.solution_type.automation,
    },

    feature: {
      description: dict.solution_features.features.automation.description,
      items: [
        {
          icon: Workflow,
          ...dict.solution_features.features.automation.items.processes,
        },
        {
          icon: Plug,
          ...dict.solution_features.features.automation.items.integrations,
        },
        {
          icon: Bell,
          ...dict.solution_features.features.automation.items.notifications,
        },
        {
          icon: Clock,
          ...dict.solution_features.features.automation.items.timeSaving,
        },
      ],
    },
  },
  custom: {
    solutionType: SOLUTION_TYPES.CUSTOM,
    icon: Code2,
    preview: CustomPreview.src,
    image: CustomImage.src,

    content: {
      ...dict.common.solution_type.custom,
    },

    feature: {
      description: dict.solution_features.features.custom.description,
      items: [
        {
          icon: Puzzle,
          ...dict.solution_features.features.custom.items.fromScratch,
        },
        {
          icon: Code2,
          ...dict.solution_features.features.custom.items.customLogic,
        },
        {
          icon: Plug,
          ...dict.solution_features.features.custom.items.integrations,
        },
        {
          icon: Server,
          ...dict.solution_features.features.custom.items.backend,
        },
        {
          icon: TrendingUp,
          ...dict.solution_features.features.custom.items.scalability,
        },
      ],
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
