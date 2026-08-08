import type { Locale } from "./config"

import ru from "./dictionaries/ru.json"
import en from "./dictionaries/en.json"
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
