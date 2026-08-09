"use client"

import { getSolution } from "@/constants/solution/solution.data"
import { Solution } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaPrice({ solution_type }: { solution_type?: string }) {
  const dict = useDict()

  if (!solution_type) {
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

  const solution: Solution = getSolution({ dict, solution_type })

  return (
    <div className="lg:text-right">
      <p className="text-sm text-black/50 font-mono mb-1 uppercase tracking-widest">
        {solution.content.title}

        {solution.pricing.min ? ` - ${dict.common.from}` : ""}
      </p>
      {solution.pricing.min != null ? (
        <p className="font-display text-[clamp(2rem,4vw,3.5rem)] text-black leading-none">
          {solution.pricing.min}
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
