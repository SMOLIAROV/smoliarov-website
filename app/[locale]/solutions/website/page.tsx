"use client"

import { PromoSection } from "@/components/common/Promo/PromoSection"
import { ContactFormSection } from "@/components/contact-form/ContactFormSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { HeroSection } from "@/components/solution/hero/HeroSection"
import { PROJECT_TYPES } from "@/constants/project/projects"
import { getPromo } from "@/constants/promo/promo.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

export default function WebsiteSolutionPage() {
  const dict = useDict()
  const promo = getPromo(dict)

  return (
    <>
      <NavigationSection />
      <main className="relative min-h-screen">
        <HeroSection solution_type={PROJECT_TYPES.WEBSITE} />
        <PromoSection promo={promo.free_domain_and_hosting} />

        <ContactFormSection />
      </main>

      <FooterSection />
    </>
  )
}
