import { SectionContainer } from "@/components/common/SectionContainer"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { Solution } from "@/constants/solution/types"
import { FeatureCard } from "./FeatureCard"
import { Dictionary } from "@/lib/i18n/dictionaries"
import { NAVIGATION_SLUG } from "@/constants/navigation/navigation"

export function FeatureSection({
  dict,
  solution,
}: {
  dict: Dictionary
  solution: Solution
}) {
  const { items, description } = solution.feature
  const hasOddItems = items.length % 2 !== 0

  return (
    <SectionContainer className="pt-0">
      <div
        id={NAVIGATION_SLUG.ABOUT_SOLUTION}
        className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16"
      >
        <div
          className={
            items.length > 4
              ? "lg:sticky lg:top-28 lg:self-start"
              : "lg:self-start"
          }
        >
          <SectionHeader
            navigationId=""
            title={dict.solution_features.title}
            subtitle={dict.solution_features.subtitle}
            description={description}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((feature, index) => {
            const isLastItem = index === items.length - 1

            return (
              <FeatureCard
                key={index}
                feature={feature}
                className={
                  hasOddItems && isLastItem ? "sm:col-span-2" : undefined
                }
              />
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}
