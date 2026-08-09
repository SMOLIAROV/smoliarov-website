"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"
import { SolutionPricingPackage } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { ArrowRight, Check } from "lucide-react"

export function PriceSectionCard({
  solution_package,
}: {
  solution_package: SolutionPricingPackage
}) {
  const dict = useDict()

  return (
    <>
      {solution_package.is_popular && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black text-white border-2 border-white uppercase">
          {dict.common.popular}
        </div>
      )}

      <p
        className={`text-xs font-mono uppercase tracking-widest mb-3 ${
          solution_package.is_popular ? "text-black/50" : "text-foreground/40"
        }`}
      >
        {solution_package.title}
      </p>

      <div className="mb-5">
        <span className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-none lowercase">
          {dict.common.from} {solution_package.price}
        </span>
        <span
          className={`ml-1.5 text-lg ${
            solution_package.is_popular ? "text-black/50" : "text-foreground/40"
          }`}
        >
          BYN
        </span>
      </div>

      <p
        className={`text-sm leading-relaxed mb-6 ${
          solution_package.is_popular
            ? "text-black/70"
            : "text-muted-foreground"
        }`}
      >
        {solution_package.description}
      </p>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {solution_package.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                solution_package.is_popular
                  ? "text-black"
                  : "text-foreground/50"
              }`}
            />

            <span
              className={`text-sm leading-snug ${
                solution_package.is_popular
                  ? "text-black/80"
                  : "text-foreground/70"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`#${NAVIGATION.CONTACT_FORM}`}
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all group ${
          solution_package.is_popular
            ? "bg-black text-white hover:bg-black/80"
            : "bg-white/[0.06] text-white hover:bg-white/10"
        }`}
      >
        {dict.common.discuss}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </>
  )
}
