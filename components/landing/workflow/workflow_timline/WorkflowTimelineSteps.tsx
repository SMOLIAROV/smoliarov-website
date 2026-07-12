import { WorkflowStep } from "@/constants/workflow/workflow.data"
import { TimelineStep } from "../timeline/TimelineStep"

export function WorkflowTimelineSteps({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="hidden lg:block">
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-[39px] md:left-[51px] top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-20 md:space-y-24">
          {steps.map((step, index) => (
            <TimelineStep key={step.key} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
