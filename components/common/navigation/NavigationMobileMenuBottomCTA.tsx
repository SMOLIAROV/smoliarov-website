"use client"

import { Globe } from "lucide-react"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocaleSwitch } from "@/lib/i18n/hooks/useLocaleSwitch"
import type { MobileMenuBottomCTAProps } from "./types"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { WhiteButton } from "@/components/ui/Buttons/WhiteButton"
import { BaseLinkButton } from "@/components/ui/Buttons/BaseLinkButton"

export function NavigationMobileMenuBottomCTA({
  isOpen,
  onClose,
}: MobileMenuBottomCTAProps) {
  const dict = useDict()
  const { otherLocale, switchLocalePath } = useLocaleSwitch()

  return (
    <div
      className={`flex flex-col gap-3 pt-6border-t border-foreground/10 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{
        transitionDelay: isOpen ? "300ms" : "0ms",
      }}
    >
      <WhiteButton
        href={useNavLink(NAVIGATION_SLUG.CONTACT_FORM).href}
        title={dict.common.discuss_task}
        onClick={onClose}
        className="h-12 w-full rounded-xl text-sm font-medium"
      />

      <BaseLinkButton
        href={switchLocalePath}
        onClick={onClose}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-foreground/[0.03] text-sm font-medium text-foreground/70 transition-all hover:bg-foreground/[0.06] hover:text-foreground active:scale-[0.98]"
      >
        <Globe className="size-4" />
        {otherLocale.toUpperCase()}
      </BaseLinkButton>
    </div>
  )
}
