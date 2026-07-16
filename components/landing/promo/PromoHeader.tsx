"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function PromoHeader() {
  const dict = useDict()

  return (
    <div className="mb-8 md:mb-14" id={NAVIGATION.PROMO}>
      <span className="mb-3 inline-flex items-center gap-3 text-xs font-mono text-muted-foreground md:text-sm">
        <span className="w-6 md:w-12 h-px bg-foreground/30" />
        {dict.promo.subtitle.toUpperCase()}
      </span>
      <h2 className="font-display text-3xl tracking-tight text-white md:text-5xl">
        {dict.promo.title.toUpperCase()}
      </h2>
    </div>
  )
}
