"use client"

import { WhiteButtonWithArrowToRight } from "@/components/ui/Buttons/WhiteButtonWithArrowToRight"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { OutlineButton } from "@/components/ui/Buttons/OutlineButton"

export function HeroCTA() {
  const dict = useDict()

  return (
    <div className="flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
      <WhiteButtonWithArrowToRight
        href={useNavLink(NAVIGATION_SLUG.CONTACT_FORM).href}
        title={dict.common.discuss_task}
      />
      <OutlineButton
        href={useNavLink(NAVIGATION_SLUG.SOLUTIONS).href}
        title={dict.hero.view_solutions}
      />
    </div>
  )
}
