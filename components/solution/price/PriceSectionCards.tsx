"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { PriceSectionCard } from "./PriceSectionCard"
import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"

export function PriceSectionCards({
  packages,
}: {
  packages: SolutionPackagesResponse
}) {
  const dict = useDict()
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {packages.packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-3xl p-7 w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] ${
              pkg.is_popular
                ? "bg-white text-black border-2 border-white"
                : "bg-card/20 text-foreground border border-foreground/15"
            }`}
          >
            <PriceSectionCard solution_package={pkg} />
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center">
        {dict.solution_packages.note}
      </p>
    </>
  )
}
