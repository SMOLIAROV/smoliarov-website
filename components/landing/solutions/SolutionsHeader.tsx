"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function SolutionsHeader() {
  const dict = useDict()

  return (
    <div id={NAVIGATION.SERVICES} className="mb-6 md:mb-10">
      <span className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-muted-foreground mb-3 md:mb-6">
        <span className="w-6 md:w-12 h-px bg-foreground/30" />
        {dict.solutions.subtitle}
      </span>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1] transition-all duration-1000 text-balance opacity-100 translate-y-0">
          {dict.solutions.title}
        </h2>
      </div>
    </div>
  )
}
