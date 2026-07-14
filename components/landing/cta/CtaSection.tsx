import { AvaliableBage } from "@/components/common/AvaliableBage"
import { CtaDescription } from "./CtaDescription"
import { DescribeButton } from "@/components/common/Buttons/DescribeButton"
import { PageContainer } from "@/components/common/PageContainer"

export function CtaSection() {
  return (
    <section className="relative">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-foreground/15 rounded-2xl bg-card/20 backdrop-blur-sm transition-all duration-500 delay-100">
          <div className="text-center md:text-left">
            <AvaliableBage />
            <CtaDescription />
          </div>
          <DescribeButton />
        </div>
      </PageContainer>
    </section>
  )
}
