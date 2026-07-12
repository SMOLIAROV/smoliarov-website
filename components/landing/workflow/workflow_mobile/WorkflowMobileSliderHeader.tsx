import { WorkflowStep } from "@/constants/workflow/workflow.data"
import { WorkflowMobileSliderCounter } from "./WorkflowMobileSliderCounter"
import { TimelineHeaderDetails } from "../timeline/TimelineHeaderDetails"

export function WorkflowMobileSliderHeader({
  index,
  step,
}: {
  index: number
  step: WorkflowStep
}) {
  return (
    <div className="p-6">
      <WorkflowMobileSliderCounter index={index} />

      <h3 className="text-2xl font-display tracking-tight mb-4">
        {step.title}
      </h3>

      <p className="text-white/75 text-[15px] leading-relaxed mb-6">
        {step.description}
      </p>

      <div className="space-y-2.5">
        <TimelineHeaderDetails step={step} />
      </div>
    </div>
  )
}
