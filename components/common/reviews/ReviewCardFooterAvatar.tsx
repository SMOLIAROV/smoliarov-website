"use client"

import Image from "next/image"
import { useState } from "react"
import { User } from "lucide-react"
import { ReviewCardProps } from "./types"

export function ReviewCardFooterAvatar({ review }: ReviewCardProps) {
  const [hasError, setHasError] = useState(false)

  const showFallback = !review.avatar || hasError

  return (
    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-foreground/15 bg-white/5">
      {showFallback ? (
        <div className="flex h-full w-full items-center justify-center">
          <User className="h-6 w-6 text-white/40" />
        </div>
      ) : (
        <Image
          src={review.avatar}
          alt={review.name}
          fill
          className="object-cover"
          sizes="48px"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}
