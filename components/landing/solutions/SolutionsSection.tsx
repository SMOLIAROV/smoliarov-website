import { SolutionsHeader } from "./SolutionsHeader"
import { SolutionsCards } from "./SolutionsCards"

export function SolutionsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <SolutionsHeader />
        <SolutionsCards />
      </div>
    </section>
  )
}
