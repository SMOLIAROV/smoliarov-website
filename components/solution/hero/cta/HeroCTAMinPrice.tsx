"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function HeroCTAMinPrice({
  minPrice,
  currency,
}: {
  minPrice: number
  currency: string
}) {
  const dict = useDict()
  return (
    <div>
      <p className="text-xs text-foreground/40 uppercase tracking-widest font-mono mb-1">
        {dict.common.price}
      </p>
      <p className="text-2xl font-display font-medium text-white">
        {dict.common.from.toLowerCase()} {minPrice}
        <span className="text-foreground/50 text-lg"> {currency}</span>
      </p>
    </div>
  )
}
