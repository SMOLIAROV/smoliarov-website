import Image from "next/image"
import { ReviewCardProps } from "./types"
import { User } from "lucide-react"

export function ReviewCardFooterAvatar({ review }: ReviewCardProps) {
  return (
    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-foreground/15 bg-white/5">
      {review.avatar ? (
        <Image
          src={review.avatar}
          alt={review.name}
          fill
          className="object-cover"
          sizes="48px"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <User className="h-6 w-6 text-white/40" />
        </div>
      )}
    </div>
  )
}
