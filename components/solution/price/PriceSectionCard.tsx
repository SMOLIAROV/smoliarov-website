"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"
import { SolutionPricingPackage } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { ArrowRight, Check } from "lucide-react"

export function PriceSectionCard({
  solutionPackage,
}: {
  solutionPackage: SolutionPricingPackage
}) {
  const dict = useDict()

  return (
    <>
      {solutionPackage.is_popular && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black text-white border-2 border-white">
          {dict.common.popular}
        </div>
      )}

      <p
        className={`text-xs font-mono uppercase tracking-widest mb-3 ${
          solutionPackage.is_popular ? "text-black/50" : "text-foreground/40"
        }`}
      >
        {solutionPackage.title}
      </p>

      <div className="mb-5">
        <span className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-none lowercase">
          {dict.common.from} {solutionPackage.price}
        </span>
        <span
          className={`ml-1.5 text-lg ${
            solutionPackage.is_popular ? "text-black/50" : "text-foreground/40"
          }`}
        >
          BYN
        </span>
      </div>

      <p
        className={`text-sm leading-relaxed mb-6 ${
          solutionPackage.is_popular ? "text-black/70" : "text-muted-foreground"
        }`}
      >
        {solutionPackage.description}
      </p>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {solutionPackage.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                solutionPackage.is_popular ? "text-black" : "text-foreground/50"
              }`}
            />

            <span
              className={`text-sm leading-snug ${
                solutionPackage.is_popular
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
          solutionPackage.is_popular
            ? "bg-black text-white hover:bg-black/80"
            : "bg-white text-black hover:bg-white/80"
        }`}
      >
        {dict.common.discuss_task}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </>
  )
}
