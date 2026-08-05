import { ContactFormSection } from "@/components/contact-form/ContactFormSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { HeroSection } from "@/components/solution/hero/HeroSection"

export default function WebsiteSolutionPage() {
  return (
    <>
      <NavigationSection />

      <main className="relative min-h-screen">
        <HeroSection />

        <ContactFormSection />
      </main>

      <FooterSection />
    </>
  )
}
