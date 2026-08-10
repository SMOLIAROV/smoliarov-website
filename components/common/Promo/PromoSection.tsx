"use client"

import { PromoHeader } from "./PromoHeader"
import { PromoTimer } from "./PromoTimer"
import { PromoCTA } from "./PromoCTA"
import { PromoImage } from "./PromoImage"
import { PageContainer } from "@/components/common/PageContainer"
import { useTimer } from "@/hooks/timer/useTimer"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { FORM_PARAMS } from "@/constants/form/form"
import { useContactFormNavigation } from "@/hooks/contact-form/useContactFormNavigation"
import { Promotion } from "@/constants/promo/promo.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function PromoSection({ promo }: { promo: Promotion }) {
  const dict = useDict()
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
    <section className="relative py-12 md:py-16 lg:py-24 bg-black overflow-hidden">
      <PageContainer>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-stretch">
          <div className="space-y-6 pt-2">
            <PromoHeader
              firstTitle={promo.content.title.first}
              secondTitle={promo.content.title.second}
              subtittle={dict.promo.subtitle}
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
      </PageContainer>
    </section>
  )
}
