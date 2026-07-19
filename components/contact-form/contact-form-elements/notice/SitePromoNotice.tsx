"use client"

import { Gift } from "lucide-react"
import { useTimer } from "@/hooks/timer/useTimer"
import { PROMO_DATES } from "@/constants/promo/promo"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function SitePromoNotice() {
  const dict = useDict()
  const { isExpired } = useTimer(PROMO_DATES.free_domain_and_hosting)

  if (isExpired) return null

  return (
    <div className="mt-2 rounded-lg border border-emerald-900 bg-emerald-950/60 p-3 text-sm text-emerald-400">
      <div className="flex items-start gap-2">
        <Gift className="mt-0.5 h-4 w-4 flex-shrink-0" />
        <div>
          <p className="font-medium">{dict.contact_form.notice.title}</p>
          <p className="mt-0.5 text-xs text-emerald-500/90">
            {dict.contact_form.notice.description}
          </p>
        </div>
      </div>
    </div>
  )
}
