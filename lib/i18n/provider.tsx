"use client"

import { I18nContext } from "./context"

import type { I18nProviderProps } from "./types"

import { getOtherLocale } from "./config"

export function I18nProvider({ locale, dict, children }: I18nProviderProps) {
  const otherLocale = getOtherLocale(locale)

  return (
    <I18nContext.Provider
      value={{
        locale,
        dict,
        otherLocale,
        switchLocalePath: `/${otherLocale}`,
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}
