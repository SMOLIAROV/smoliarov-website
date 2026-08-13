"use client"

import { SolutionPricingPackage } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { getMinPackagePrice } from "@/lib/utils/getMinPackagePrice"

export function CtaPrice({
  title,
  solutionPackages,
}: {
  title?: string
  solutionPackages?: SolutionPricingPackage[]
}) {
  const dict = useDict()
  const currency = process.env.NEXT_PUBLIC_CURRENCY!
  const packages = solutionPackages ?? []
  const minPrice = getMinPackagePrice(packages)
  const hasPackageAndPrice = solutionPackages && minPrice

  if (!hasPackageAndPrice) {
    return (
      <div className="md:text-right">
        <p className="mb-1 font-mono text-sm uppercase tracking-widest text-black/50">
          {dict.cta.consultation}
        </p>

        <p className="font-display text-4xl uppercase leading-none text-black">
          {dict.cta.free}
        </p>
      </div>
    )
  }

  return (
    <div className="md:text-right">
      <p className="mb-1 font-mono text-sm uppercase tracking-widest text-black/50">
        {title} - {dict.common.from}
      </p>

      <p className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-black">
        {minPrice}
        <span className="ml-1.5 text-xl text-black/40">{currency}</span>
      </p>
    </div>
  )
}
