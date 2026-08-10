import type { ReviewCardProps } from "./types"
import { ReviewCardMessage } from "./ReviewCardMessage"
import { ReviewCardFooter } from "./ReviewCardFooter"

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-foreground/15 bg-black p-6">
      <ReviewCardMessage message={review.message} />
      <ReviewCardFooter review={review} />
    </div>
  )
}
