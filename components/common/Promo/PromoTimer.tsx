"use client"

import { useTimer } from "@/hooks/timer/useTimer"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function PromoTimer({ date_expired }: { date_expired: string }) {
  const dict = useDict()

  const { days, hours, minutes, seconds, isExpired } = useTimer(date_expired)

  if (isExpired) {
    return <div className="text-white/70">{dict.promo.promo_is_over}</div>
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg md:text-xl">
      <span className="text-white/70">{dict.promo.time_left}</span>
      <span className="font-mono tabular-nums text-white font-medium tracking-tight">
        {days}
        {dict.promo.timer.day}
        {` `}
        {hours}
        {dict.promo.timer.hour}
        {` `}
        {minutes}
        {dict.promo.timer.minute}
        {` `}
        {seconds}
        {dict.promo.timer.second}
        {` `}
      </span>
    </div>
  )
}
