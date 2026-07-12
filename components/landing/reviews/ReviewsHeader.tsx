"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function ReviewsHeader() {
  const dict = useDict()

  return (
    <div className="mb-10 md:mb-14">
      <span className="mb-3 inline-flex items-center gap-3 text-xs font-mono text-muted-foreground md:text-sm">
        <span className="h-px w-12 bg-foreground/30" />
        {dict.reviews.subtitle}
      </span>
      <h2 className="font-display text-3xl tracking-tight text-white md:text-5xl">
        {dict.reviews.title}
      </h2>
      <p className="mt-3 max-w-md text-white/60">{dict.reviews.description}</p>
    </div>
  )
}
