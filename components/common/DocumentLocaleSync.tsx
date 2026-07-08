"use client"

import { useEffect } from "react"

import type { Locale } from "@/lib/i18n/config"

interface Props {
  locale: Locale
}

export function DocumentLocaleSync({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
