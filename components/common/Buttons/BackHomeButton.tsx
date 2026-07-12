"use client"

import { ROUTES } from "@/constants/routes"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function BackHomeButton() {
  const dict = useDict()
  const locale = useLocale()

  return (
    <Link
      href={ROUTES.home(locale)}
      className="group mb-10 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
    >
      <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
      {dict.common.back_home}
    </Link>
  )
}
