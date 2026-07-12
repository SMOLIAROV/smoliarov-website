import { ReviewCard } from "@/components/landing/reviews/ReviewCard"
import { BackHomeButton } from "@/components/common/Buttons/BackHomeButton"
import { ReviewsHeader } from "@/components/landing/reviews/ReviewsHeader"
import { getAllReviews } from "@/lib/reviews/getAllReviews"

export default async function ReviewsPage() {
  const reviews = await getAllReviews()

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-24 md:px-6 lg:px-12">
        <BackHomeButton />

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
      </div>
    </div>
  )
}
