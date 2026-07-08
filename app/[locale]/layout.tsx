import { DocumentLocaleSync } from "@/components/common/DocumentLocaleSync"

import { SiteUiShell } from "@/components/common/SiteUiShell"

import { getDictionary } from "@/lib/i18n/dictionaries"

import { I18nProvider } from "@/lib/i18n/provider"

import { notFound } from "next/navigation"
import { isValidLocale } from "@/lib/i18n/config"

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = await getDictionary(locale)

  return (
    <I18nProvider locale={locale} dict={dict}>
      <DocumentLocaleSync locale={locale} />
      <SiteUiShell>{children}</SiteUiShell>
    </I18nProvider>
  )
}
