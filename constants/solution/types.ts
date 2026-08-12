import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"
import { LucideIcon } from "lucide-react"

export interface SolutionPricingPackage {
  id: string
  title: string
  description: string
  features: string[]
  price: number
  is_popular?: boolean
}

export interface Solution {
  solutionType: string
  icon: LucideIcon
  preview: string
  image: string

  content: {
    title: string
    description: string
  }

  pricing?: SolutionPackagesResponse
}
