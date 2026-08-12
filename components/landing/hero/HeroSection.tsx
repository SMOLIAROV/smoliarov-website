"use client"

import { PageContainer } from "@/components/common/PageContainer"
import { HeroCTA } from "./HeroCTA"
import { GridLines } from "../../common/GridLines"
import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { SectionContainer } from "@/components/common/SectionContainer"
import HeroImage from "@/public/images/hero.webp"
import { HeroBackground } from "@/components/common/Hero/HeroBackground"

export function HeroSection() {
  const dict = useDict()

  return (
    <SectionContainer className="min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <HeroBackground image_url={HeroImage.src} />
      </div>
      <GridLines />

      <PageContainer>
        <div className="mt-50 lg:mt-0 lg:max-w-[65%]">
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
