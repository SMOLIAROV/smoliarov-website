"use client"

import { PROMO_DATES } from "@/constants/promo/promo"
import { useTimer } from "@/hooks/timer/useTimer"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function PromoTimer() {
    const dict = useDict()
    
    const { days, hours, minutes, seconds, isExpired } = useTimer(PROMO_DATES.free_domain_and_hosting)

    if (isExpired) {
        return <div className="text-white/70">Акция закончилась</div>
    }

    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg md:text-xl">
            <span className="text-white/70">{dict.promo.time_left}</span>
            <span className="font-mono tabular-nums text-white font-medium tracking-tight">
                {days}{dict.promo.timer.day}{` `}
                {hours}{dict.promo.timer.hour}{` `}
                {minutes}{dict.promo.timer.minute}{` `}
                {seconds}{dict.promo.timer.second}{` `}
            </span>
        </div>
    )
}