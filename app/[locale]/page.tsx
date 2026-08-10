import { CtaSection } from "@/components/common/cta/CtaSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { HeroSection } from "@/components/landing/hero/HeroSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { WorkflowSection } from "@/components/landing/workflow/WorkflowSection"
import { SolutionsSection } from "@/components/landing/solutions/SolutionsSection"
import { ReviewsSection } from "@/components/common/reviews/ReviewsSection"
import { HandsSection } from "@/components/landing/hands/HandsSection"
import { ContactFormSection } from "@/components/common/contact-form/ContactFormSection"
import { FaqSection } from "@/components/landing/faq/FaqSection"
import { HomePromo } from "@/components/landing/promo/PromoSections"
import { Metadata } from "next"
import { getMetadata } from "@/lib/metadata"
import { METADATA_PAGES } from "@/constants/metadata/metadata"
import { Locale } from "@/lib/i18n/config"
import { getLatestReviews } from "@/lib/api/endpoints/reviews"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params

  return getMetadata(METADATA_PAGES.HOME, locale)
}

export default async function HomePage() {
  const reviews = await getLatestReviews()

  return (
    <>
      <NavigationSection />

      <main className="relative min-h-screen">
        <HeroSection />
        <HomePromo />
        <SolutionsSection />
        <CtaSection />
        <WorkflowSection />
        <HandsSection />
        <ReviewsSection reviews={reviews} />
        <ContactFormSection />
        <FaqSection />
      </main>

      <FooterSection />
    </>
  )
}
