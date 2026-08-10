"use client"

import { ROUTES } from "@/constants/routes"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ReviewsAllButton() {
  const dict = useDict()
  const locale = useLocale()

  return (
    <div className="mt-10 flex justify-center">
      <Link
        href={ROUTES.reviews(locale)}
        className="group inline-flex items-center gap-2 rounded-xl border border-foreground/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:border-white/40"
      >
        {dict.reviews.all_reviews}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </div>
  )
}
