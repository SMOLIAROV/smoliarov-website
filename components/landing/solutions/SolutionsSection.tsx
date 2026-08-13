"use client"

import { SectionContainer } from "@/components/common/SectionContainer"
import { SolutionsCards } from "./SolutionsCards"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function SolutionsSection() {
  const dict = useDict()

  return (
    <SectionContainer>
      <SectionHeader
        navigationId={NAVIGATION_SLUG.SOLUTIONS}
        title={dict.solutions.title}
        subtitle={dict.solutions.subtitle}
      />
      <SolutionsCards />
    </SectionContainer>
  )
}
