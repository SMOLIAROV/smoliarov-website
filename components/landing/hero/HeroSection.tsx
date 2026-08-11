"use client"

import { PageContainer } from "@/components/common/PageContainer"
import { HeroCTA } from "./HeroCTA"
import { HeroGridLines } from "./HeroGridLines"
import { HeroSectionBackground } from "./HeroSectionBackground"
import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { SectionContainer } from "@/components/common/SectionContainer"

export function HeroSection() {
  const dict = useDict()

  return (
    <SectionContainer className="min-h-screen flex flex-col justify-center">
      <HeroSectionBackground />
      <HeroGridLines />

      <PageContainer>
        <div className="lg:max-w-[65%]">
          <HeroMainHeadline
            title={dict.common.slogan}
            description={dict.hero.description}
          />
          <HeroCTA />
        </div>
      </PageContainer>
    </SectionContainer>
  )
}
