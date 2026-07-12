import { AvaliableBage } from "@/components/common/AvaliableBage"
import { CtaDescription } from "./CtaDescription"
import { DescribeButton } from "@/components/common/Buttons/DescribeButton"

export function CtaSection() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-foreground/10 rounded-xl bg-card/20 backdrop-blur-sm transition-all duration-500 delay-100">
          <div className="text-center md:text-left">
            <AvaliableBage />
            <CtaDescription />
          </div>
          <DescribeButton />
        </div>
      </div>
    </section>
  )
}
