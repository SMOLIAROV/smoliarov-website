"use client"

import { useCallback, useEffect, useState } from "react"

import { COOKIE_CONSENT_STORAGE_KEY, type CookieConsent } from "../types"

function readStoredConsent(): CookieConsent | null {
  const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)

  if (stored === "accepted" || stored === "declined") {
    return stored
  }

  return null
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsent | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setConsentState(readStoredConsent())
    setIsReady(true)
  }, [])

  const setConsent = useCallback((value: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value)
    setConsentState(value)
  }, [])

  return {
    consent,
    setConsent,
    isReady,
    isVisible: isReady && consent === null,
  }
}
