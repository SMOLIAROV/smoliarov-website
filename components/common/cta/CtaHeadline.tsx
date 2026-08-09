"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaHeadline() {
  const dict = useDict()

  return (
    <>
      <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] text-black leading-tight text-balance mb-4">
        {dict.cta.title}
      </h2>
      <p className="text-black/60 text-[15px] leading-relaxed">
        {dict.cta.description}
      </p>
    </>
  )
}
