"use client"

import { useVisibility } from "@/hooks/useVisibility"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function HeroDescription() {
  const dict = useDict()
  const isVisible = useVisibility()

  return (
    <p
      className={`text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10 transition-all duration-1000 delay-200 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {dict.hero.description}
    </p>
  )
}
