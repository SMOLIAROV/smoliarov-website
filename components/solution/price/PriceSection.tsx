import { PageContainer } from "@/components/common/PageContainer"
import { PriceSectionHeader } from "./PriceSectionHeader"
import { PriceSectionCards } from "./PriceSectionCards"
import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"

export function PriceSection({
  solutionPackages,
}: {
  solutionPackages: SolutionPackagesResponse
}) {
  return (
    <section className="relative py-20 md:py-28 bg-black">
      <PageContainer>
        <PriceSectionHeader />
        <PriceSectionCards packages={solutionPackages} />
      </PageContainer>
    </section>
  )
}
