"use client"

import { OutlineButton } from "@/components/ui/Buttons/OutlineButton"
import { WhiteButtonWithArrowToRight } from "@/components/ui/Buttons/WhiteButtonWithArrowToRight"
import { getContactFormHref } from "@/constants/form/contact"
import { ROUTES } from "@/constants/routes"
import { useContactFormNavigation } from "@/hooks/contact-form/useContactFormNavigation"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"

export function PromoCTA({ solutionType, slug, order, remark }) {
  const dict = useDict()
  const locale = useLocale()

  const href = getContactFormHref(solutionType)
  const { handleLinkClick } = useContactFormNavigation()

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <WhiteButtonWithArrowToRight
          href={href}
          onClick={handleLinkClick(solutionType)}
          title={order}
        />

        <OutlineButton
          href={ROUTES.legal(locale, slug)}
          title={dict.promo.promo_terms}
        />
      </div>

      <p className="text-xs text-white/50 max-w-md leading-relaxed">
        * {remark}
      </p>
    </>
  )
}
