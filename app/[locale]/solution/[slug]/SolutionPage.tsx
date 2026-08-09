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

export default function SolutionPage({ slug }: { slug: string }) {
  const dict = useDict()
  const promo: Promotion = getPromo({ dict, solution_type: slug })
  const solution: Solution = getSolution({ dict, solution_type: slug })

  return (
    <>
      <NavigationSection />
      <main className="relative min-h-screen">
        <HeroSection solution_type={solution.solution_type} />
        {promo && <PromoSection promo={promo} />}
        <CtaSection solution_type={solution.solution_type} />
        <ContactFormSection />
      </main>

      <FooterSection />
    </>
  )
}
