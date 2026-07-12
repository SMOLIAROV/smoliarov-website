"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaDescription() {
  const dict = useDict()

  return <p className="text-foreground/70 text-sm md:text-base">{dict.cta}</p>
}
