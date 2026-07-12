"use client"

import Link from "next/link"

import { Globe } from "lucide-react"

import { useLocaleSwitch } from "@/lib/i18n/hooks/useLocaleSwitch"

import { Button } from "@/components/ui/button"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { useNavLink } from "@/hooks/navigation/useNavLink"

export function NavigationDesktopCTA() {
  const dict = useDict()
  const { otherLocale, switchLocalePath } = useLocaleSwitch()

  return (
    <div className="hidden xl:flex items-center gap-4">
      <Link
        href={switchLocalePath}
        className="flex items-center gap-1.5 text-xs text-foreground/70 hover:text-foreground transition-colors"
      >
        <Globe className="w-4 h-4" />
        {otherLocale.toUpperCase()}
      </Link>
      <Button
        size="sm"
        className="rounded-lg bg-foreground hover:bg-foreground/90 text-background px-4 h-8 text-xs"
      >
        <a href={useNavLink(NAVIGATION.CONTACT_FORM).href}>
          {dict.common.discuss_task}
        </a>
      </Button>
    </div>
  )
}
