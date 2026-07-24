import { DocumentLocaleSync } from "@/components/common/DocumentLocaleSync"

import { SiteUiShell } from "@/components/common/SiteUiShell"

import { getDictionary } from "@/lib/i18n/dictionaries"

import { I18nProvider } from "@/lib/i18n/provider"

import { notFound } from "next/navigation"
import { isValidLocale } from "@/lib/i18n/config"
import { YandexMetrics } from "@/components/common/YandexMetrics"
import React from "react"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = await getDictionary(locale)

  return (
    <I18nProvider locale={locale} dict={dict}>
      <DocumentLocaleSync locale={locale} />
      <SiteUiShell>{children}</SiteUiShell>

      <YandexMetrics />
    </I18nProvider>
  )
}
