import { SolutionsHeader } from "./SolutionsHeader"
import { SolutionsCards } from "./SolutionsCards"
import { PageContainer } from "@/components/common/PageContainer"

export function SolutionsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
      <PageContainer>
        <SolutionsHeader />
        <SolutionsCards />
      </PageContainer>
    </section>
  )
}
