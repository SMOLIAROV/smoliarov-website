import { WorkflowMobileSliderProps } from "../types"
import { WorkflowMobileSliderHeader } from "./WorkflowMobileSliderHeader"
import { WorkflowMobileSliderImage } from "./WorkflowMobileSliderImage"

export function WorkflowMobileSliderSteps({
  steps,
}: WorkflowMobileSliderProps) {
  return steps.map((step, index) => (
    <div
      key={step.key}
      className="w-[calc(100%-12px)] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-white/10"
    >
      <WorkflowMobileSliderImage image={step.image} title={step.title} />
      <WorkflowMobileSliderHeader index={index} step={step} />
    </div>
  ))
}
