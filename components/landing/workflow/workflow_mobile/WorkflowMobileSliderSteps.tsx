import { WorkflowMobileSliderProps } from "../types"
import { WorkflowMobileSliderHeader } from "./WorkflowMobileSliderHeader"
import { WorkflowMobileSliderImage } from "./WorkflowMobileSliderImage"

export function WorkflowMobileSliderSteps({
  steps,
}: WorkflowMobileSliderProps) {
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step.key}
          data-index={index}
          className="shrink-0 w-[calc(100vw-32px)] rounded-2xl overflow-hidden border border-white/10 sm:w-[520px] md:w-[560px]"
        >
          <WorkflowMobileSliderImage image={step.image} title={step.title} />
          <WorkflowMobileSliderHeader index={index} step={step} />
        </div>
      ))}
    </>
  )
}
