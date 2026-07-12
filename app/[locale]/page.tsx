import { CtaSection } from "@/components/landing/cta/CtaSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { HeroSection } from "@/components/landing/hero/HeroSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { WorkflowSection } from "@/components/landing/workflow/WorkflowSection"
import { SolutionsSection } from "@/components/landing/solutions/SolutionsSection"
import { ReviewsSection } from "@/components/landing/reviews/ReviewsSection"

export default function HomePage() {
  return (
    <>
      <NavigationSection />

      <main className="relative min-h-screen">
        <HeroSection />
        <SolutionsSection />
        <CtaSection />
        <WorkflowSection />
        <ReviewsSection />
      </main>

      <FooterSection />
    </>
  )
}
