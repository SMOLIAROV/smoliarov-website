import { ReviewCard } from "@/components/landing/reviews/ReviewCard"
import { BackHomeButton } from "@/components/common/Buttons/BackHomeButton"
import { ReviewsHeader } from "@/components/landing/reviews/ReviewsHeader"
import { getAllReviews } from "@/lib/reviews/getAllReviews"
import { PageContainer } from "@/components/common/PageContainer"
import { SwitchLocaleButton } from "@/components/common/Buttons/SwitchLocaleButton"

export default async function ReviewsPage() {
  const reviews = await getAllReviews()

  return (
    <div className="min-h-screen bg-black text-white mb-10">
      <PageContainer className="pt-24">
        <div className="flex items-center justify-between w-full mb-10">
          <BackHomeButton />
          <SwitchLocaleButton />
        </div>

        <ReviewsHeader />

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
    </div>
  )
}
