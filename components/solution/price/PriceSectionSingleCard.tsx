"use client"

import { NAVIGATION } from "@/constants/navigation/navigation"
import { SolutionPricingPackage } from "@/constants/solution/types"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { ArrowRight, Check } from "lucide-react"

export function PriceSectionSingleCard({
  solutionPackage,
}: {
  solutionPackage: SolutionPricingPackage
}) {
  const dict = useDict()

  return (
    <div
      className={`relative rounded-2xl p-7 md:p-10 lg:p-12 ${
        solutionPackage.is_popular
          ? "bg-white text-black border-2 border-white"
          : "bg-card/20 text-foreground border border-foreground/15"
      }`}
    >
      {solutionPackage.is_popular && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black text-white border-2 border-white">
          {dict.common.popular}
        </div>
      )}

      <div className="flex flex-col gap-10">
        <div className="max-w-4xl">
          <p
            className={`text-xs font-mono uppercase tracking-widest mb-4 ${
              solutionPackage.is_popular
                ? "text-black/40"
                : "text-foreground/40"
            }`}
          >
            {solutionPackage.title}
          </p>

          <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] font-medium tracking-tight">
            {solutionPackage.title}
          </h3>

          <p
            className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed ${
              solutionPackage.is_popular
                ? "text-black/60"
                : "text-muted-foreground"
            }`}
          >
            {solutionPackage.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 max-w-5xl">
          {solutionPackage.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <Check
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  solutionPackage.is_popular
                    ? "text-black"
                    : "text-foreground/50"
                }`}
              />

              <span
                className={`text-sm leading-snug ${
                  solutionPackage.is_popular
                    ? "text-black/70"
                    : "text-foreground/70"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div
          className={`pt-8 border-t flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 ${
            solutionPackage.is_popular
              ? "border-black/10"
              : "border-foreground/10"
          }`}
        >
          <div>
            <p
              className={`text-xs font-mono uppercase tracking-widest mb-2 ${
                solutionPackage.is_popular
                  ? "text-black/40"
                  : "text-foreground/40"
              }`}
            >
              {dict.common.from}
            </p>

            <div className="flex items-baseline">
              <span className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-medium">
                {solutionPackage.price}
              </span>

              <span
                className={`ml-2 text-lg ${
                  solutionPackage.is_popular
                    ? "text-black/40"
                    : "text-foreground/40"
                }`}
              >
                BYN
              </span>
            </div>
          </div>

          <a
            href={`#${NAVIGATION.CONTACT_FORM}`}
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-black text-white rounded-xl text-sm font-medium transition-all hover:bg-black/90 group"
          >
            {dict.common.discuss_task}

            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
