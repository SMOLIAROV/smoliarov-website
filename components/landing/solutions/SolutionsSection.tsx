"use client"

import { SectionContainer } from "@/components/common/SectionContainer"
import { SolutionsCards } from "./SolutionsCards"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function SolutionsSection() {
  const dict = useDict()

  return (
    <SectionContainer>
      <SectionHeader
        navigation_id={NAVIGATION.SOLUTIONS}
        title={dict.solutions.title}
        subtitle={dict.solutions.subtitle}
      />
      <SolutionsCards />
    </SectionContainer>
  )
}
