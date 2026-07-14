"use client"

import { Button } from "@/components/ui/button"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { SwitchLocaleButton } from "@/components/common/Buttons/SwitchLocaleButton"

export function NavigationDesktopCTA() {
  const dict = useDict()

  return (
    <div className="hidden xl:flex items-center gap-4">
      <SwitchLocaleButton />
      
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
