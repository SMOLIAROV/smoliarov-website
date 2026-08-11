"use client"

import { useLocale } from "@/lib/i18n/hooks/useLocale"
import { ReviewCardProps } from "./types"

export function ReviewCardFooterData({ review }: ReviewCardProps) {
  const formattedDate = new Intl.DateTimeFormat(useLocale(), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(review.created_at))

  return (
    <div className="flex flex-col gap-1 min-w-0 flex-1">
      <div className="flex items-baseline gap-2">
        <p className="text-white">{review.name}</p>
        {review.position && (
          <p className="text-xs text-white/50">{review.position}</p>
        )}
      </div>
      <p className="text-xs text-white/50">{review.project_name}</p>
      <p className="mt-0.5 text-[10px] text-white/40">{formattedDate}</p>
    </div>
  )
}
