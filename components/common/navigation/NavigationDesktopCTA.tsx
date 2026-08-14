"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { SwitchLocaleButton } from "@/components/ui/Buttons/SwitchLocaleButton"
import { WhiteButton } from "@/components/ui/Buttons/WhiteButton"

export function NavigationDesktopCTA() {
  const dict = useDict()

  return (
    <div className="hidden xl:flex items-center gap-4">
      <SwitchLocaleButton />

      <WhiteButton
        href={useNavLink(NAVIGATION_SLUG.CONTACT_FORM).href}
        title={dict.common.discuss_task}
      />
    </div>
  )
}
