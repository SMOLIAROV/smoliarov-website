"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function HeroDescription() {
  const dict = useDict()

  return (
    <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10 transition-all duration-1000 delay-200">
      {dict.hero.description}
    </p>
  )
}
