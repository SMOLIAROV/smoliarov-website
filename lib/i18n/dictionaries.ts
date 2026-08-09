import type { Locale } from "./config"

import ru from "./dictionaries/ru"
import en from "./dictionaries/en"
import { ERRORS } from "../errors"

const dictionaries = {
  ru,
  en,
} as const

export type Dictionary = (typeof dictionaries)[Locale]

export function getDictionary(locale: Locale): Dictionary {
  const dictionary = dictionaries[locale]

  if (!dictionary) {
    throw new Error(`${ERRORS.I18N.NOT_FOUND}: ${locale}`)
  }

  return dictionary
}
