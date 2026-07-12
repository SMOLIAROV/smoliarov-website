"use client"

import { SolutionsHeader } from "./SolutionsHeader"
import { SolutionCard } from "./SolutionCard"
import { getSolutions } from "../../../constants/solutions/solutions.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function SolutionSection() {
  const dict = useDict()
  const solutions = getSolutions(dict)

  return (
    <section className="relative py-16 md:py-24 bg-black">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <SolutionsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {solutions.map((solution, index) => {
            const isLast = index === solutions.length - 1
            const isOddTotal = solutions.length % 2 === 1

            return (
              <SolutionCard
                key={solution.key}
                solution={solution}
                index={index}
                className={isLast && isOddTotal ? "lg:col-span-2" : ""}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
