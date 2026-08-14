"use client"

import { cn } from "@/lib/utils/cn"
import { SolutionCardProps } from "./types"
import { SolutionsCardsHeader } from "./SolutionsCardsHeader"
import { SolutionCardImage } from "./SolutionCardImage"
import { SolutionCardCounter } from "./SolutionCardCounter"
import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import { useLocale } from "@/lib/i18n/hooks/useLocale"

export function SolutionsCard({
  solution,
  index,
  className,
}: SolutionCardProps) {
  const locale = useLocale()

  return (
    <Link
      href={ROUTES.solution(locale, solution.solutionType)}
      className={cn(
        "group relative overflow-hidden border border-foreground/15 bg-card/30 rounded-2xl h-full flex cursor-pointer transition-shadow hover:shadow-lg",
        className
      )}
    >
      <SolutionsCardsHeader solution={solution} />
      <SolutionCardImage solution={solution} />
      <SolutionCardCounter index={index} />
    </Link>
  )
}
