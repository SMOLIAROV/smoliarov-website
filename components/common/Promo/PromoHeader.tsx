"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"

export function PromoHeader({
  first_title,
  second_title,
  subtittle,
}: {
  first_title: string
  second_title: string
  subtittle: string
}) {
  return (
    <div className="mb-8 md:mb-14" id={NAVIGATION.PROMO}>
      <span className="mb-3 inline-flex items-center gap-3 text-xs font-mono text-muted-foreground md:text-sm">
        <span className="w-6 md:w-12 h-px bg-foreground/30" />
        {subtittle}
      </span>
      <h2 className="font-display uppercase text-3xl tracking-tight text-white md:text-5xl">
        {first_title}
        <br />
        {second_title}
      </h2>
    </div>
  )
}
