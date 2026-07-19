"use client"

import { WorkflowMobileSliderSteps } from "./WorkflowMobileSliderSteps"
import { WorkflowMobileSliderDots } from "./WorkflowMobileSliderDots"
import { WorkflowMobileSliderProps } from "../types"
import { useSnapSlider } from "./hooks/useSnapSlider"

export function WorkflowMobileSlider({ steps }: WorkflowMobileSliderProps) {
  const { containerRef, activeIndex, scrollToIndex } = useSnapSlider(
    steps.length
  )

  return (
    <div className="lg:hidden -mx-4">
      <div
        ref={containerRef}
        className="overflow-x-auto snap-x snap-mandatory flex gap-3 pb-4 pl-3 pr-3 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <WorkflowMobileSliderSteps steps={steps} />
      </div>

      <WorkflowMobileSliderDots
        total={steps.length}
        activeIndex={activeIndex}
        onDotClick={scrollToIndex}
      />
    </div>
  )
}
