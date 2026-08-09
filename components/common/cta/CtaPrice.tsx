"use client"

import { Solution } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { getMinPackagePrice } from "@/lib/utils/getMinPackagePrice"

export function CtaPrice({ solution }: { solution?: Solution }) {
  const dict = useDict()

  if (!solution) {
    return (
      <div className="lg:text-right">
        <p className="text-sm text-black/50 font-mono mb-1 uppercase tracking-widest">
          {dict.cta.consultation}
        </p>

        <p className="font-display uppercase text-[clamp(2rem,2vw,3.5rem)] text-black leading-none">
          {dict.cta.free}
        </p>
      </div>
    )
  }

  const packages = solution.pricing?.packages ?? []

  const minPrice = getMinPackagePrice(packages)

  return (
    <div className="lg:text-right">
      <p className="text-sm text-black/50 font-mono mb-1 uppercase tracking-widest">
        {solution.content.title}

        {minPrice != null ? ` - ${dict.common.from}` : ""}
      </p>
      {minPrice != null ? (
        <p className="font-display text-[clamp(2rem,4vw,3.5rem)] text-black leading-none">
          {minPrice}
          <span className="ml-1.5 text-xl text-black/40">BYN</span>
        </p>
      ) : (
        <p className="font-display uppercase text-[clamp(2rem,2vw,3.5rem)] text-black leading-none">
          {dict.cta.negotiable}
        </p>
      )}
    </div>
  )
}
