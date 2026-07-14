"use client"

import type { ReactNode } from "react"

import { CookieBanner } from "../features/cookie-banner"

import {
  LoadingScreen,
  LoadingScreenProvider,
} from "../features/loading-screen"

import { useLoadingProgress } from "../features/loading-screen/hooks/useLoadingProgress"

export function SiteUiShell({ children }: { children: ReactNode }) {
  const loading = useLoadingProgress()

  return (
    <LoadingScreenProvider value={useLoadingProgress()}>
      {!loading.isHidden && <LoadingScreen />}
      {children}
      <CookieBanner />
    </LoadingScreenProvider>
  )
}
