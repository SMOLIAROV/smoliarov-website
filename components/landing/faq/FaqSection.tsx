import { FaqHeader } from "./FaqHeader"
import { FaqImage } from "./FaqImage"
import { FaqQuestions } from "./FaqQuestions"
import { SectionContainer } from "@/components/common/SectionContainer"

export function FaqSection() {
  return (
    <SectionContainer>
      <FaqHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 **items-start**">
        <FaqImage />
        <FaqQuestions />
      </div>
    </SectionContainer>
  )
}
