"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaHeadline() {
  const dict = useDict()

  return (
    <>
      <h2 className="mb-4 font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight text-black text-balance">
        {dict.cta.title}
      </h2>
      <p className="text-black/60 text-[15px] leading-relaxed">
        {dict.cta.description}
      </p>
    </>
  )
}
