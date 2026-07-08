import type { ReactNode } from "react"

import type { Locale } from "./config"

import type { Dictionary } from "./dictionaries"

export interface I18nProviderProps {
  locale: Locale
  dict: Dictionary
  children: ReactNode
}

export interface I18nContextValue {
  locale: Locale
  dict: Dictionary
  otherLocale: Locale
  switchLocalePath: string
}
