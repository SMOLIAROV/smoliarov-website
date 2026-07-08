"use client"

import Link from "next/link"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocaleSwitch } from "@/lib/i18n/hooks/useLocaleSwitch"

import type { MobileMenuBottomCTAProps } from "./types"
import { NAVIGATION } from "@/constants/navigation/navigation"

export function NavigationMobileMenuBottomCTA({
  isOpen,
  onClose,
}: MobileMenuBottomCTAProps) {
  const dict = useDict()
  const { otherLocale, switchLocalePath } = useLocaleSwitch()

  return (
    <div
      className={`
        flex flex-col gap-3 pt-6
        border-t border-foreground/10
        transition-all duration-500
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{
        transitionDelay: isOpen ? "300ms" : "0ms",
      }}
    >
      <Button
        asChild
        className="
          h-12 w-full
          rounded-xl
          bg-foreground text-background
          text-sm font-medium
          hover:bg-foreground/90
          transition-all
          active:scale-[0.98]
        "
      >
        <a href={NAVIGATION.CONTACT_FORM} onClick={onClose}>
          {dict.common.discuss_task}
        </a>
      </Button>

      <Link
        href={switchLocalePath}
        onClick={onClose}
        className="
          h-12 w-full
          flex items-center justify-center gap-2
          rounded-xl

          border border-foreground/10
          bg-foreground/[0.03]

          text-sm font-medium
          text-foreground/70

          hover:bg-foreground/[0.06]
          hover:text-foreground

          transition-all
          active:scale-[0.98]
        "
      >
        <Globe className="size-4" />
        {otherLocale.toUpperCase()}
      </Link>
    </div>
  )
}
