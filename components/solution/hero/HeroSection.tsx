"use dict"

import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { PageContainer } from "@/components/common/PageContainer"
import { HeroGridLines } from "@/components/landing/hero/HeroGridLines"
import { HeroCTA } from "./cta/HeroCTA"
import { HeroImage } from "./image/HeroImage"
import { HeroImageBadge } from "./image/HeroImageBadge"
import { getSolutions } from "@/constants/solutions/solutions.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function HeroSection({ solution_type }: { solution_type: string }) {
  const dict = useDict()
  const solution = getSolutions(dict).find((s) => s.key === solution_type)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      <HeroGridLines />

      <PageContainer>
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-28 lg:py-36">
          <div className="mb-6 md:mb-8">
            <HeroMainHeadline
              title={solution.title}
              subtitle={solution.description}
            />

            <HeroCTA />
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <HeroImage image={solution.image} />
            <HeroImageBadge />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
