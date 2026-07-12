"use client"

import { useLocale } from "@/lib/i18n/hooks/useLocale"
import { ReviewCardProps } from "./types"

export function ReviewCardFooterDate({ review }: ReviewCardProps) {
  const formattedDate = new Intl.DateTimeFormat(useLocale(), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(review.date))

  return (
    <div className="min-w-0 flex-1">
      <p className="font-medium text-white">{review.name}</p>
      {review.position && (
        <p className="text-xs text-white/50">{review.position}</p>
      )}
      <p className="mt-0.5 text-[10px] text-white/40">{formattedDate}</p>
    </div>
  )
}
