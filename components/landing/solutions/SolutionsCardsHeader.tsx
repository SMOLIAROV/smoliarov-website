"use client"

import { Solution } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { ArrowRight } from "lucide-react"

export function SolutionsCardsHeader({ solution }: { solution: Solution }) {
  const dict = useDict()
  const Icon = solution.icon

  return (
    <div className="flex-1 p-6 md:p-8 flex flex-col relative z-10">
      <div className="flex items-start justify-between mb-6 sm:hidden">
        <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 rounded-xl">
          <Icon className="w-6 h-6 text-foreground/70" />
        </div>
      </div>

      <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">
        {solution.content.title}
      </h3>

      <p className="text-muted-foreground text-[15px] leading-relaxed flex-1">
        {solution.content.description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/60 group">
        <span>{dict.common.learn_more}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
