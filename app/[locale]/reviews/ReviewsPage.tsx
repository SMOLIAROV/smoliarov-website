import { ReviewCard } from "@/components/common/reviews/ReviewCard"
import { PageContainer } from "@/components/common/PageContainer"
import { SwitchLocaleButton } from "@/components/ui/Buttons/SwitchLocaleButton"
import { getAllReviews } from "@/lib/api/endpoints/reviews"
import { Locale } from "@/lib/i18n/config"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { BackLink } from "@/components/ui/Buttons/BackLink"
import { ROUTES } from "@/constants/routes"

export default async function ReviewsPage({ locale }: { locale: Locale }) {
  const reviews = await getAllReviews()
  const dict = getDictionary(locale)

  return (
    <PageContainer className="pt-24 pb-24">
      <div className="flex items-center justify-between w-full mb-10">
        <BackLink href={ROUTES.home(locale)} title={dict.common.back_home} />
        <SwitchLocaleButton />
      </div>

      <SectionHeader
        navigationId={NAVIGATION_SLUG.REVIEWS}
        title={dict.reviews.title}
        subtitle={dict.reviews.subtitle}
        description={dict.reviews.description}
      />

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-white/50">Пока нет отзывов.</p>
      )}

      <BackLink href={ROUTES.home(locale)} title={dict.common.back_home} />
    </PageContainer>
  )
}
