"use client"

import { PriceSectionCards } from "./PriceSectionCards"
import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { SectionContainer } from "@/components/common/SectionContainer"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"

export function PriceSection({
  solutionPackages,
}: {
  solutionPackages: SolutionPackagesResponse
}) {
  const dict = useDict()

  return (
    <SectionContainer>
      <SectionHeader
        navigationId={NAVIGATION_SLUG.PRICE}
        title={dict.solution_packages.title}
        subtitle={dict.solution_packages.description}
      />
      <PriceSectionCards packages={solutionPackages} />
    </SectionContainer>
  )
}
