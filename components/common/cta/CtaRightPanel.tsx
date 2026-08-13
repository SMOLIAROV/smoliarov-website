"use client"

import { SolutionPricingPackage } from "@/constants/solution/types"
import { CtaPrice } from "./CtaPrice"
import { BlackButtonWithArrowToRight } from "@/components/ui/Buttons/BlackButtonWithArrowToRight"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaRightPanel({
  title,
  solutionPackages,
}: {
  title?: string
  solutionPackages?: SolutionPricingPackage[]
}) {
  const dict = useDict()

  return (
    <div className="flex w-full shrink-0 flex-col items-stretch gap-5 md:w-auto md:items-end md:text-right">
      <CtaPrice title={title} solutionPackages={solutionPackages} />

      <BlackButtonWithArrowToRight
        href={useNavLink(NAVIGATION_SLUG.CONTACT_FORM).href}
        title={dict.common.discuss_task}
      />
    </div>
  )
}
