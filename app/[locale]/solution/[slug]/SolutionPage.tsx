"use client"

import { PromoSection } from "@/components/common/Promo/PromoSection"
import { ContactFormSection } from "@/components/common/contact-form/ContactFormSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { HeroSection } from "@/components/solution/hero/HeroSection"
import { getPromo, Promotion } from "@/constants/promo/promo.data"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { CtaSection } from "@/components/common/cta/CtaSection"
import { getSolution } from "@/constants/solution/solution.data"
import { Solution } from "@/constants/solution/types"
import { PriceSection } from "@/components/solution/price/PriceSection"
import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"

export default function SolutionPage({
  slug,
  solution_packages,
}: {
  slug: string
  solution_packages: SolutionPackagesResponse
}) {
  const dict = useDict()
  const promo: Promotion = getPromo({ dict, solution_type: slug })
  const solution: Solution = getSolution({ dict, solution_type: slug })

  const solutionWithPricing: Solution = {
    ...solution,
    pricing: solution_packages,
  }

  return (
    <>
      <NavigationSection />
      <main className="relative min-h-screen">
        <HeroSection solution={solutionWithPricing} />
        {promo && <PromoSection promo={promo} />}
        {solution_packages?.packages?.length > 0 && (
          <PriceSection solution_packages={solution_packages} />
        )}
        <CtaSection solution={solutionWithPricing} />
        <ContactFormSection />
      </main>

      <FooterSection />
    </>
  )
}
