"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function NotFoundHeadline() {
  const dict = useDict()

  return (
    <div className="mt-6 md:mt-8">
      <h1 className="text-balance font-display text-2xl md:text-4xl leading-[1.1] tracking-tight text-white">
        {dict.not_found.title}
      </h1>

      <p className="mt-3 md:mt-4 max-w-md text-pretty text-sm md:text-base leading-relaxed text-white/70">
        {dict.not_found.description}
      </p>
    </div>
  )
}
