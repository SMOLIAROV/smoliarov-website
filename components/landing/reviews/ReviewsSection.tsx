import { ReviewsAllButton } from "./ReviewsAllButton"
import { ReviewsHeader } from "./ReviewsHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { ReviewsCards } from "./ReviewsCards"

export function ReviewsSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-24">
      <div
        id={NAVIGATION.REVIEWS}
        className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-12"
      >
        <ReviewsHeader />
        <ReviewsCards />
        <ReviewsAllButton />
      </div>
    </section>
  )
}
