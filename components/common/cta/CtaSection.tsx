import { PageContainer } from "@/components/common/PageContainer"
import { CtaLeftPanel } from "./CtaLeftPanel"
import { CtaRightPanel } from "./CtaRightPanel"
import { Solution } from "@/constants/solution/types"

export function CtaSection({ solution }: { solution?: Solution }) {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      <PageContainer>
        <div className="relative overflow-hidden bg-white rounded-2xl px-8 py-12 md:px-14 md:py-16">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <CtaLeftPanel />
            <CtaRightPanel solution={solution} />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
