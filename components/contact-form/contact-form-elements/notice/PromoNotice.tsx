import { Gift } from "lucide-react"
import { useTimer } from "@/hooks/timer/useTimer"
import { Promotion } from "@/constants/promo/promo.data"

export function PromoNotice({ promo }: { promo: Promotion }) {
  const { isExpired } = useTimer(promo.date_expired)

  if (isExpired) return null

  return (
    <div className="mt-2 rounded-lg border border-emerald-900 bg-emerald-950/60 p-3 text-sm text-emerald-400">
      <div className="flex items-start gap-2">
        <Gift className="mt-0.5 h-4 w-4 flex-shrink-0" />
        <div>
          <p className="font-medium">{promo.content.notice.title}</p>
          <p className="mt-0.5 text-xs text-emerald-500/90">
            {promo.content.notice.description}
          </p>
        </div>
      </div>
    </div>
  )
}
