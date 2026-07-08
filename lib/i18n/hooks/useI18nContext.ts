import { useContext } from "react"

import { ERRORS } from "@/lib/errors"

import { I18nContext } from "@/lib/i18n/context"

export function useI18nContext() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error(ERRORS.I18N.CONTEXT)
  }

  return context
}
