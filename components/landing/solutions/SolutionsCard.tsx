"use client"

import { cn } from "@/lib/utils/cn"
import { SolutionCardProps } from "./types"
import { SolutionsCardsHeader } from "./SolutionsCardsHeader"
import { SolutionCardImage } from "./SolutionCardImage"
import { SolutionCardCounter } from "./SolutionCardCounter"

export function SolutionsCard({
  solution,
  index,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-foreground/15 bg-card/30 rounded-2xl h-full flex",
        className
      )}
    >
      <SolutionsCardsHeader solution={solution} />
      <SolutionCardImage solution={solution} />
      <SolutionCardCounter index={index} />
    </div>
  )
}
