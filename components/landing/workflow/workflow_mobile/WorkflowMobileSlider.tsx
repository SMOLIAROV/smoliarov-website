import { WorkflowMobileSliderSteps } from "./WorkflowMobileSliderSteps"
import { WorkflowMobileSliderProps } from "../types"

export function WorkflowMobileSlider({ steps }: WorkflowMobileSliderProps) {
  return (
    <div className="lg:hidden -mx-4">
      <div className="overflow-x-auto snap-x snap-mandatory flex gap-3 pb-8 pl-3 pr-3 scrollbar-hide">
        <WorkflowMobileSliderSteps steps={steps} />
      </div>
    </div>
  )
}
