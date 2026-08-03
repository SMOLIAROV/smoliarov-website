import { getLatestReviews } from "@/lib/api/endpoints/reviews"
import { ReviewCard } from "./ReviewCard"

export async function ReviewsCards() {
  const reviews = await getLatestReviews()

  if (reviews.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
