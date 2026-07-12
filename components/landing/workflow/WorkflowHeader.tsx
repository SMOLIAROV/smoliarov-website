"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function WorkflowHeader() {
  const dict = useDict()

  return (
    <div id={NAVIGATION.WORKFLOW} className="mb-6 md:mb-10">
      <span className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-muted-foreground mb-3 md:mb-6">
        <span className="w-6 md:w-12 h-px bg-foreground/30" />
        {dict.workflow.subtitle}
      </span>

      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-[-1.5px] leading-[0.95] mb-6 text-balance">
        {dict.workflow.title}
      </h2>

      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
        {dict.workflow.description}
      </p>
    </div>
  )
}
