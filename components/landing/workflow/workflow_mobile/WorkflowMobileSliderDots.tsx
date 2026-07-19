"use client"

import { WorkflowMobileSliderDotsProps } from "../types"

export function WorkflowMobileSliderDots({
  total,
  activeIndex,
  onDotClick,
}: WorkflowMobileSliderDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/30"
          }`}
        />
      ))}
    </div>
  )
}
