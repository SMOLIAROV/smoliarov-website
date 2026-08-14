"use client"

import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function FaqHeader() {
  const dict = useDict()

  return (
    <div id={NAVIGATION_SLUG.FAQ} className="mb-6 md:mb-10">
      <span className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-muted-foreground mb-3 md:mb-6">
        <span className="w-6 md:w-12 h-px bg-foreground/15" />
        {dict.faq.subtitle}
      </span>

      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1] transition-all duration-1000 text-balance">
        {dict.faq.title}
      </h2>

      <p className="text-muted-foreground text-sm md:text-base mt-3 md:mt-5 max-w-xl transition-all duration-1000 delay-100">
        {dict.faq.description}
      </p>
    </div>
  )
}
