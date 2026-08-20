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
        <img
          src={review.avatar}
          alt={review.name}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}
