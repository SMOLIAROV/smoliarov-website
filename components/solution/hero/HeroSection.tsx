import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { PageContainer } from "@/components/common/PageContainer"
import { GridLines } from "@/components/common/GridLines"
import { HeroCTA } from "./cta/HeroCTA"
import { Solution } from "@/constants/solution/types"
import { HeroBackground } from "@/components/common/Hero/HeroBackground"
import { SectionContainer } from "@/components/common/SectionContainer"
import { getMinPackagePrice } from "@/lib/utils/getMinPackagePrice"

export function HeroSection({ solution }: { solution: Solution }) {
  return (
    <SectionContainer className="relative flex min-h-[100svh] flex-col justify-center min-[1920px]:min-h-[800px] min-[1920px]:h-[900px] min-[1920px]:max-h-[900px]">
      <div className="absolute inset-x-0 top-0 z-0">
        <HeroBackground image_url={solution.image} />
      </div>

      <GridLines />

      <PageContainer>
        <div className="relative z-10 flex flex-col gap-8 pt-28 pb-0 min-[700px]:grid min-[700px]:grid-cols-2 min-[700px]:items-center min-[700px]:gap-8 lg:gap-12 lg:py-24 xl:gap-16 xl:py-28">
          <div className="min-w-0">
            <HeroMainHeadline
              title={solution.content.title}
              subtitle={solution.content.description}
            />
            <HeroCTA
              min_price_package={getMinPackagePrice(solution.pricing.packages)}
            />
          </div>
        </div>
      </PageContainer>
    </SectionContainer>
  )
}
