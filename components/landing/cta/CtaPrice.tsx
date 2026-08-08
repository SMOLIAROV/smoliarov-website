"use client"

import { getSolutions } from "@/constants/solution/solutions.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaPrice({ solution_type }: { solution_type?: string }) {
  const dict = useDict()
  const solution = solution_type
    ? getSolutions(dict).find((s) => s.key === solution_type)
    : null

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

  return (
    <div className="lg:text-right">
      <p className="text-sm text-black/50 font-mono mb-1 uppercase tracking-widest">
        {solution.title}

        {solution.price ? ` - ${dict.common.from}` : ""}
      </p>
      {solution.price != null ? (
        <p className="font-display text-[clamp(2rem,4vw,3.5rem)] text-black leading-none">
          {solution.price}
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
