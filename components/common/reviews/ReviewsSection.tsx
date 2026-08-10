import { ReviewsAllButton } from "./ReviewsAllButton"
import { ReviewsHeader } from "./ReviewsHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { ReviewsCards } from "./ReviewsCards"
import { PageContainer } from "@/components/common/PageContainer"

export function ReviewsSection({ reviews }) {
  return (
    <section className="relative py-12 md:py-20 lg:py-24">
      <PageContainer>
        <div id={NAVIGATION.REVIEWS}>
          <ReviewsHeader />
          <ReviewsCards reviews={reviews} />
          <ReviewsAllButton />
        </div>
      </PageContainer>
    </section>
  )
}
