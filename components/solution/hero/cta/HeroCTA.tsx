"use client"

import { WhiteButtonWithArrowToRight } from "@/components/ui/Buttons/WhiteButtonWithArrowToRight"
import { HeroCTAMinPrice } from "./HeroCTAMinPrice"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function HeroCTA({ min_price_package }: { min_price_package?: number }) {
  const dict = useDict()
  const currency = process.env.NEXT_PUBLIC_CURRENCY!

  return (
    <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
      {min_price_package && (
        <HeroCTAMinPrice minPrice={min_price_package} currency={currency} />
      )}
      <WhiteButtonWithArrowToRight
        href={useNavLink(NAVIGATION_SLUG.CONTACT_FORM).href}
        title={dict.common.discuss_task}
      />
    </div>
  )
}
