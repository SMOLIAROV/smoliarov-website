"use client"

import { PageContainer } from "@/components/common/PageContainer"
import { HeroCTA } from "./HeroCTA"
import { HeroDescription } from "./HeroDescription"
import { HeroGridLines } from "./HeroGridLines"
import { HeroMainHeadline } from "./HeroMainHeadline"
import { HeroSectionBackground } from "./HeroSectionBackground"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      <HeroSectionBackground />
      <HeroGridLines />

      <PageContainer>
        <div className="lg:max-w-[65%]">
          <HeroMainHeadline />
          <HeroDescription />
          <HeroCTA />
        </div>
      </PageContainer>
    </section>
  )
}
