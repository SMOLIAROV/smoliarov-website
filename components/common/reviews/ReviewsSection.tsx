"use client"

import { ReviewsAllButton } from "./ReviewsAllButton"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"
import { ReviewsCards } from "./ReviewsCards"
import { SectionHeader } from "../SectionHeader/SectionHeader"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { SectionContainer } from "../SectionContainer"

export function ReviewsSection({ reviews }) {
  const dict = useDict()

  return (
    <SectionContainer>
      <div id={NAVIGATION_SLUG.REVIEWS}>
        <SectionHeader
          navigationId={NAVIGATION_SLUG.REVIEWS}
          title={dict.reviews.title}
          subtitle={dict.reviews.subtitle}
          description={dict.reviews.description}
        />
        <ReviewsCards reviews={reviews} />
        <ReviewsAllButton />
      </div>
    </SectionContainer>
  )
}
