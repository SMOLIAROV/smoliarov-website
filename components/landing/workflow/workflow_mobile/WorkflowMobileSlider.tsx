"use client"

import { WorkflowMobileSliderDots } from "./WorkflowMobileSliderDots"
import { WorkflowMobileSliderSteps } from "./WorkflowMobileSliderSteps"
import { WorkflowMobileSliderProps } from "../types"
import { useSnapSlider } from "./hooks/useSnapSlider"

export function WorkflowMobileSlider({ steps }: WorkflowMobileSliderProps) {
  const {
    containerRef,
    activeIndex,
    offset,
    goToIndex,
    handlePointerDown,
    handlePointerUp,
    handlePointerCancel,
  } = useSnapSlider(steps.length)

  return (
    <div className="lg:hidden -mx-4">
      <div className="relative">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className="overflow-hidden pb-4 select-none touch-pan-y"
        >
          <div
            className="flex gap-3 will-change-transform transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${offset}px, 0, 0)`,
            }}
          >
            <WorkflowMobileSliderSteps steps={steps} />
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-4 bg-gradient-to-r from-black to-transparent sm:block"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-4 bg-gradient-to-l from-black to-transparent sm:block"
        />
      </div>

      <WorkflowMobileSliderDots
        total={steps.length}
        activeIndex={activeIndex}
        onDotClick={goToIndex}
      />
    </div>
  )
}
