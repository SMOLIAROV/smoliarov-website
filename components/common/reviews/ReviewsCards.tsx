import { ReviewCard } from "./ReviewCard"

export async function ReviewsCards({ reviews }) {
  if (reviews.length === 0) return null

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {reviews.map((review) => (
        <div
          className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          key={review.id}
        >
          <ReviewCard key={review.id} review={review} />
        </div>
      ))}
    </div>
  )
}
