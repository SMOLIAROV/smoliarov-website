"use client"

import { PromoSection } from "@/components/common/Promo/PromoSection"
import { ContactFormSection } from "@/components/contact-form/ContactFormSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { HeroSection } from "@/components/solution/hero/HeroSection"
import { SOLUTION_TYPES } from "@/constants/solution/solutions"
import { getPromo } from "@/constants/promo/promo.data"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { CtaSection } from "@/components/landing/cta/CtaSection"

export default function WebsiteSolutionPage() {
  const dict = useDict()
  const promo = getPromo(dict)

  return (
    <>
      <NavigationSection />
      <main className="relative min-h-screen">
        <HeroSection solution_type={SOLUTION_TYPES.WEBSITE} />
        <PromoSection promo={promo.free_domain_and_hosting} />
        <CtaSection solution_type={SOLUTION_TYPES.WEBSITE} />
        <ContactFormSection />
      </main>

      <FooterSection />
    </>
  )
}
