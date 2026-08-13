"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"
import { ROUTES } from "@/constants/routes"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { Button } from "@/components/ui/button"

export function NotFoundActions() {
  const dict = useDict()
  const locale = useLocale()

  return (
    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
      <Button
        className="rounded-xl bg-white hover:bg-white/90 text-black px-6 md:px-8 h-11 md:h-12 text-sm"
        asChild
      >
        <a href={ROUTES.home(locale)} className="group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {dict.common.back_home}
        </a>
      </Button>

      <Button
        variant="outline"
        className="rounded-xl border-white/15 bg-black hover:bg-white/5 text-white px-6 md:px-8 h-11 md:h-12 text-sm"
        asChild
      >
        <a
          href={`${ROUTES.home(locale)}#${NAVIGATION_SLUG.CONTACT_FORM}`}
          className="group inline-flex items-center gap-2"
        >
          {dict.common.discuss_task}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  )
}
