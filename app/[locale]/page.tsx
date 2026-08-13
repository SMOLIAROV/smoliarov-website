import { CtaSection } from "@/components/common/cta/CtaSection"
import { FooterSection } from "@/components/common/footer/FooterSection"
import { HeroSection } from "@/components/landing/hero/HeroSection"
import { NavigationSection } from "@/components/common/navigation/NavigationSection"
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
import { PageContainer } from "@/components/common/PageContainer"
import {
  NAVIGATION_SLUG,
  NAVIGATION_TYPE,
} from "@/constants/navigation/navigation"

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
  const sections = [
    NAVIGATION_SLUG.SOLUTIONS,
    NAVIGATION_SLUG.WORKFLOW,
    ...(reviews.length > 0 ? [NAVIGATION_SLUG.REVIEWS] : []),
    NAVIGATION_SLUG.CONTACT_FORM,
    NAVIGATION_SLUG.FAQ,
  ]

  return (
    <>
      <NavigationSection
        navigationType={NAVIGATION_TYPE.HOME}
        sections={sections}
      />

      <main className="relative min-h-screen">
        <HeroSection />

        <PageContainer>
          <HomePromo />
          <SolutionsSection />
          <CtaSection />
          <WorkflowSection />
        </PageContainer>

        <HandsSection />

        <PageContainer>
          <ReviewsSection reviews={reviews} />
          <ContactFormSection />
          <FaqSection />
        </PageContainer>
      </main>

      <FooterSection
        navigationType={NAVIGATION_TYPE.HOME}
        sections={sections}
      />
    </>
  )
}
