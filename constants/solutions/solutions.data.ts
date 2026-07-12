import { Globe, Zap, MessageSquare, Settings, Code2 } from "lucide-react"
import React from "react"

export type Solution = {
  key: string
  icon: React.ElementType
  title: string
  description: string
  image: string
}

type SolutionsDict = {
  solutions: {
    items: {
      websites: { title: string; description: string }
      web_apps: { title: string; description: string }
      telegram_bots: { title: string; description: string }
      automation: { title: string; description: string }
      custom: { title: string; description: string }
    }
  }
}

export const getSolutions = (dict: SolutionsDict): Solution[] => [
  {
    key: "websites",
    icon: Globe,
    title: dict.solutions.items.websites.title,
    description: dict.solutions.items.websites.description,
    image: "/images/solutions/sites.webp",
  },
  {
    key: "web-apps",
    icon: Zap,
    title: dict.solutions.items.web_apps.title,
    description: dict.solutions.items.web_apps.description,
    image: "/images/solutions/services.webp",
  },
  {
    key: "telegram-bots",
    icon: MessageSquare,
    title: dict.solutions.items.telegram_bots.title,
    description: dict.solutions.items.telegram_bots.description,
    image: "/images/solutions/bots.webp",
  },
  {
    key: "automation",
    icon: Settings,
    title: dict.solutions.items.automation.title,
    description: dict.solutions.items.automation.description,
    image: "/images/solutions/automation.webp",
  },
  {
    key: "custom",
    icon: Code2,
    title: dict.solutions.items.custom.title,
    description: dict.solutions.items.custom.description,
    image: "/images/solutions/custom.webp",
  },
]
