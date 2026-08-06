"use client"

import { PromoSection } from "@/components/common/Promo/PromoSection"
import { getPromo } from "@/constants/promo/promo.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function HomePromo() {
  const dict = useDict()
  const promo = getPromo(dict)

  return <PromoSection promo={promo.free_domain_and_hosting} />
}
