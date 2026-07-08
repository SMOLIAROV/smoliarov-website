"use client"

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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 pt-24 md:pt-32 lg:pt-40 pb-36 md:pb-44 lg:pb-48">
        <div className="lg:max-w-[65%]">
          <HeroMainHeadline />
          <HeroDescription />
          <HeroCTA />
        </div>
      </div>
    </section>
  )
}
