import { CtaSection } from "@/components/landing/cta/CtaSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { HeroSection } from "@/components/landing/hero/HeroSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { SolutionSection } from "@/components/landing/solutions/SolutionSection"

export default function HomePage() {
  return (
    <>
      <NavigationSection />

      <main className="relative min-h-screen">
        <HeroSection />
        <SolutionSection />
        <CtaSection />
      </main>

      <FooterSection />
    </>
  )
}
