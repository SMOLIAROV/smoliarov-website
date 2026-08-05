"use client"

import { PageContainer } from "@/components/common/PageContainer"
import { HeroCTA } from "./HeroCTA"
import { HeroDescription } from "./HeroDescription"
import { HeroGridLines } from "./HeroGridLines"
import { HeroSectionBackground } from "./HeroSectionBackground"
import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function HeroSection() {
  const dict = useDict()

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      <HeroSectionBackground />
      <HeroGridLines />

      <PageContainer>
        <div className="lg:max-w-[65%]">
          <HeroMainHeadline
            title={dict.common.slogan}
            subtitle={dict.hero.subtitle}
          />
          <HeroDescription />
          <HeroCTA />
        </div>
      </PageContainer>
    </section>
  )
}
