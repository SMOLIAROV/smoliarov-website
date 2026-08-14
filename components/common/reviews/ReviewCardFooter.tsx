import { ReviewCardProps } from "./types"
import { ReviewCardFooterAvatar } from "./ReviewCardFooterAvatar"
import { ReviewCardFooterData } from "./ReviewCardFooterDate"

export function ReviewCardFooter({ review }: ReviewCardProps) {
  return (
    <div className="mt-6 flex items-center gap-4 border-t border-foreground/15 pt-6">
      <ReviewCardFooterAvatar review={review} />
      <ReviewCardFooterData review={review} />
    </div>
  )
}
