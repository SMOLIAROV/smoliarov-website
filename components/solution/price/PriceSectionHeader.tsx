"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function PriceSectionHeader() {
  const dict = useDict()

  return (
    <>
      <p className="text-xs text-foreground/40 uppercase tracking-widest font-mono mb-4">
        {dict.solution_packages.description}
      </p>
      <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] text-white leading-tight text-balance mb-14 max-w-xl">
        {dict.solution_packages.title}
      </h2>
    </>
  )
}
