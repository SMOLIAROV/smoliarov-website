import { LucideIcon } from "lucide-react"

export interface SolutionPricing {
  min: number
  options?: Record<string, number>
}

export interface Solution {
  solution_type: string
  icon: LucideIcon
  image: string

  content: {
    title: string
    description: string
  }

  pricing: SolutionPricing
}
