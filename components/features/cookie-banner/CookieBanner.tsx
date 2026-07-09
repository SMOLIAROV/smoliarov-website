"use client"

import Link from "next/link"

import { PageContainer } from "@/components/common/PageContainer"
import { Button } from "@/components/ui/button"
import { LEGAL } from "@/constants/legal/legal"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLegalLink } from "@/lib/i18n/hooks/useLegalLink"

import { useCookieConsent } from "./hooks/useCookieConsent"

export function CookieBanner() {
  const dict = useDict()
  const cookiesLink = useLegalLink(LEGAL.COOKIES)
  const { isVisible, setConsent } = useCookieConsent()

  if (!isVisible) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-0 bottom-4 z-40"
    >
      <PageContainer>
        <div className="flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-background/80 p-4 shadow-lg backdrop-blur-xl md:flex-row md:items-center md:justify-between md:gap-6 md:p-5">
          <div className="min-w-0 flex-1">
            <p
              id="cookie-banner-title"
              className="text-sm font-medium text-foreground"
            >
              {dict.cookie_banner.title}
            </p>
            <p
              id="cookie-banner-description"
              className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm"
            >
              {dict.cookie_banner.message}{" "}
              <Link
                href={cookiesLink.href}
                className="text-foreground underline-offset-4 transition-colors hover:text-foreground/80 hover:underline"
              >
                {cookiesLink.label}
              </Link>
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg"
              onClick={() => setConsent("declined")}
            >
              {dict.cookie_banner.decline}
            </Button>
            <Button
              size="sm"
              className="rounded-lg bg-foreground text-background hover:bg-foreground/90"
              onClick={() => setConsent("accepted")}
            >
              {dict.cookie_banner.accept}
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
