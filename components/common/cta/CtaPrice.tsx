"use client"

import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { getMinPackagePrice } from "@/lib/utils/getMinPackagePrice"

export function CtaPrice({
  title,
  solutionPackages,
}: {
  title?: string
  solutionPackages?: SolutionPackagesResponse
}) {
  const dict = useDict()

  if (!solutionPackages) {
    return (
      <div className="md:text-right">
        <p className="mb-1 font-mono text-sm uppercase tracking-widest text-black/50">
          {dict.cta.consultation}
        </p>

        <p className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none text-black">
          {dict.cta.free}
        </p>
      </div>
    )
  }

  const packages = solutionPackages.packages ?? []
  const minPrice = getMinPackagePrice(packages)

  return (
    <div className="md:text-right">
      <p className="mb-1 font-mono text-sm uppercase tracking-widest text-black/50">
        {title}

        {minPrice != null ? ` - ${dict.common.from}` : ""}
      </p>

      {minPrice != null ? (
        <p className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-black">
          {minPrice}
          <span className="ml-1.5 text-xl text-black/40">BYN</span>
        </p>
      ) : (
        <p className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none text-black">
          {dict.cta.negotiable}
        </p>
      )}
    </div>
  )
}
