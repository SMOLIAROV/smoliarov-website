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
  const { isExpired } = useTimer(promo.date_expired)

  const searchParams = useSearchParams()
  const project = searchParams.get(FORM_PARAMS.PROJECT_TYPE)

  const { scrollToForm } = useContactFormNavigation()

  useEffect(() => {
    if (!project) return

    scrollToForm()
  }, [project, scrollToForm])

  if (isExpired) {
    return null
  }

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-black overflow-hidden">
      <PageContainer>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-stretch">
          <div className="space-y-6 pt-2">
            <PromoHeader
              first_title={promo.content.title.first}
              second_title={promo.content.title.second}
              subtittle={dict.promo.subtitle}
            />
            <PromoTimer date_expired={promo.date_expired} />
            <PromoCTA
              project_type={promo.project_type}
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
