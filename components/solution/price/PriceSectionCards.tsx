"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { PriceSectionCard } from "./PriceSectionCard"
import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"
import { PriceSectionSingleCard } from "./PriceSectionSingleCard"

export function PriceSectionCards({
  packages,
}: {
  packages: SolutionPackagesResponse
}) {
  const dict = useDict()
  const count = packages.packages.length

  if (count === 1) {
    return (
      <>
        <PriceSectionSingleCard solutionPackage={packages.packages[0]} />

        <p className="mt-8 text-xs text-muted-foreground text-center">
          {dict.solution_packages.note}
        </p>
      </>
    )
  }

  return (
    <>
      <div
        className={`flex flex-wrap justify-center gap-5 ${
          count === 2
            ? "[&>*]:w-full md:[&>*]:w-[calc(50%-0.625rem)]"
            : "[&>*]:w-full md:[&>*]:w-[calc(50%-0.625rem)] lg:[&>*]:w-[calc(33.333%-0.835rem)]"
        }`}
      >
        {packages.packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-3xl p-7 ${
              pkg.is_popular
                ? "bg-white text-black border-2 border-white"
                : "bg-card/20 text-foreground border border-foreground/15"
            }`}
          >
            <PriceSectionCard solutionPackage={pkg} />
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground text-center">
        {dict.solution_packages.note}
      </p>
    </>
  )
}
