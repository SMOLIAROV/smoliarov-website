import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { PageContainer } from "@/components/common/PageContainer"
import { HeroGridLines } from "@/components/landing/hero/HeroGridLines"
import { HeroCTA } from "./cta/HeroCTA"
import { HeroImage } from "./image/HeroImage"
import { Solution } from "@/constants/solution/types"

export function HeroSection({ solution }: { solution: Solution }) {
  return (
    <>
      <HeroGridLines />

      <PageContainer className="lg:min-h-screen lg:flex lg:items-center">
        <div className="relative z-10 flex flex-col gap-8 pt-28 pb-0 min-[700px]:grid min-[700px]:grid-cols-2 min-[700px]:items-center min-[700px]:gap-8 lg:gap-12 lg:py-24 xl:gap-16 xl:py-28">
          <div className="min-w-0">
            <HeroMainHeadline
              title={solution.content.title}
              subtitle={solution.content.description}
            />
            <HeroCTA solution={solution} />
          </div>

          <div className="order-first min-w-0 min-[700px]:order-none">
            <HeroImage image={solution.image} />
          </div>
        </div>
      </PageContainer>
    </>
  )
}
