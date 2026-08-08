"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { SolutionsCard } from "./SolutionsCard"
import { getSolutions } from "@/constants/solution/solutions.data"

export function SolutionsCards() {
  const dict = useDict()
  const solutions = getSolutions(dict)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      {solutions.map((solution, index) => {
        const isLast = index === solutions.length - 1
        const isOddTotal = solutions.length % 2 === 1

        return (
          <SolutionsCard
            key={solution.key}
            solution={solution}
            index={index}
            className={isLast && isOddTotal ? "lg:col-span-2" : ""}
          />
        )
      })}
    </div>
  )
}
