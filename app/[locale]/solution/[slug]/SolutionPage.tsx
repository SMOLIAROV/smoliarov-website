import { PromoSection } from "@/components/common/Promo/PromoSection"
import { ContactFormSection } from "@/components/common/contact-form/ContactFormSection"
import { FooterSection } from "@/components/landing/footer/FooterSection"
import { NavigationSection } from "@/components/landing/navigation/NavigationSectios"
import { HeroSection } from "@/components/solution/hero/HeroSection"
import { getPromo, Promotion } from "@/constants/promo/promo.data"
import { CtaSection } from "@/components/common/cta/CtaSection"
import { getSolution } from "@/constants/solution/solution.data"
import { Solution } from "@/constants/solution/types"
import { PriceSection } from "@/components/solution/price/PriceSection"
import { SolutionPackagesResponse } from "@/lib/api/contracts/solutions"
import { ReviewsSection } from "@/components/common/reviews/ReviewsSection"
import { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getLatestReviews } from "@/lib/api/endpoints/reviews"
import { PageContainer } from "@/components/common/PageContainer"

export default async function SolutionPage({
  locale,
  slug,
  solutionPackages,
}: {
  locale: Locale
  slug: string
  solutionPackages: SolutionPackagesResponse
}) {
  const dict = await getDictionary(locale)
  const promo: Promotion = getPromo({ dict, solutionType: slug })
  const solution: Solution = getSolution({ dict, solutionType: slug })
  const reviews = await getLatestReviews(solution.solutionType)

  const solutionWithPricing: Solution = {
    ...solution,
    pricing: solutionPackages,
  }

  return (
    <>
      <NavigationSection />
      <main className="relative min-h-screen">
        <HeroSection solution={solutionWithPricing} />

        <PageContainer>
          {solutionPackages?.packages?.length > 0 && (
            <PriceSection solutionPackages={solutionPackages} />
          )}
          {promo && <PromoSection promo={promo} />}
          <CtaSection solution={solutionWithPricing} />
          {reviews.length > 0 && <ReviewsSection reviews={reviews} />}
          <ContactFormSection defaultSolutionType={slug} />
        </PageContainer>
      </main>

      <FooterSection />
    </>
  )
}
