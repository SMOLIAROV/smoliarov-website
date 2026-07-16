"use client"

import { Button } from "@/components/ui/button"
import { getContactFormHref } from "@/constants/form/contact"
import { LEGAL_SLUGS } from "@/constants/legal/legal"
import { PROJECT_TYPES } from "@/constants/project/projects"
import { ROUTES } from "@/constants/routes"
import { useContactFormNavigation } from "@/hooks/contact-form/useContactFormNavigation"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function PromoCTA() {
  const dict = useDict()
  const locale = useLocale()
  const href = getContactFormHref(PROJECT_TYPES.WEBSITE)
  const { handleLinkClick } = useContactFormNavigation()

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          className="rounded-xl bg-white hover:bg-white/90 text-black px-5 md:px-8 h-11 md:h-12 text-sm"
          asChild
        >
          <Link
            href={href}
            onClick={handleLinkClick(PROJECT_TYPES.WEBSITE)}

            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-all rounded-lg group shrink-0"
          >
            {dict.promo.order_website}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-xl border-foreground/15 text-white hover:bg-white/10 px-5 md:px-8 h-11 md:h-12 text-sm"
          asChild
        >
          <a href={ROUTES.legal(locale, LEGAL_SLUGS.PROMO)}>
            {dict.promo.promo_terms}
          </a>
        </Button>
      </div>

      <p className="text-xs text-white/50 max-w-md leading-relaxed">
        * {dict.promo.remark}
      </p>
    </>
  )
}
