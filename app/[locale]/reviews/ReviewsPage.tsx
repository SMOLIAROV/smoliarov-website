import { ReviewCard } from "@/components/common/reviews/ReviewCard"
import { BackHomeButton } from "@/components/common/Buttons/BackHomeButton"
import { PageContainer } from "@/components/common/PageContainer"
import { SwitchLocaleButton } from "@/components/common/Buttons/SwitchLocaleButton"
import { getAllReviews } from "@/lib/api/endpoints/reviews"
import { Locale } from "@/lib/i18n/config"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { getDictionary } from "@/lib/i18n/dictionaries"

export default async function ReviewsPage({ locale }: { locale: Locale }) {
  const reviews = await getAllReviews()
  const dict = getDictionary(locale)

  return (
    <PageContainer className="pt-24">
      <div className="flex items-center justify-between w-full mb-10">
        <BackHomeButton />
        <SwitchLocaleButton />
      </div>

      <SectionHeader
        navigation_id={NAVIGATION.REVIEWS}
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

      <BackHomeButton />
    </PageContainer>
  )
}
