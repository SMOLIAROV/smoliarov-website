import { CtaLeftPanel } from "./CtaLeftPanel"
import { CtaRightPanel } from "./CtaRightPanel"
import { Solution } from "@/constants/solution/types"
import { SectionContainer } from "../SectionContainer"

export function CtaSection({ solution }: { solution?: Solution }) {
  return (
    <SectionContainer>
      <div className="relative overflow-hidden rounded-2xl  bg-white px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-10 lg:px-14 lg:py-16">
        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14">
          <CtaLeftPanel />
          <CtaRightPanel solution={solution} />
        </div>
      </div>
    </SectionContainer>
  )
}
