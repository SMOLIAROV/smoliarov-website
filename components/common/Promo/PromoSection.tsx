"use client"

import { PromoTimer } from "./PromoTimer"
import { PromoCTA } from "./PromoCTA"
import { PromoImage } from "./PromoImage"
import { useTimer } from "@/hooks/timer/useTimer"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { FORM_PARAMS } from "@/constants/form/form"
import { useContactFormNavigation } from "@/hooks/contact-form/useContactFormNavigation"
import { Promotion } from "@/constants/promo/promo.data"
import { SectionHeader } from "../SectionHeader/SectionHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { SectionContainer } from "../SectionContainer"

export function PromoSection({ promo }: { promo: Promotion }) {
  const { isExpired } = useTimer(promo.dateExpired)

  const searchParams = useSearchParams()
  const solution = searchParams.get(FORM_PARAMS.SOLUTION_TYPE)

  const { scrollToForm } = useContactFormNavigation()

  useEffect(() => {
    if (!solution) return

    scrollToForm()
  }, [solution, scrollToForm])

  if (isExpired) {
    return null
  }

  return (
    <SectionContainer>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="space-y-6 pt-2">
          <SectionHeader
            navigation_id={NAVIGATION.PROMO}
            title={`${promo.content.title.first.toUpperCase()} \n ${promo.content.title.second.toUpperCase()}`}
          />
          <PromoTimer dateExpired={promo.dateExpired} />
          <PromoCTA
            solutionType={promo.solutionType}
            slug={promo.slug}
            order={promo.content.order}
            remark={promo.content.remark}
          />
        </div>

        <PromoImage image={promo.content.image} />
      </div>
    </SectionContainer>
  )
}
