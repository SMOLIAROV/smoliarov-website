import { WorkflowStep } from "@/constants/workflow/workflow.data"
import { TimelineStep } from "../timeline/TimelineStep"

export function WorkflowTimelineSteps({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="hidden lg:block">
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="absolute bottom-0 left-[43px] top-0 w-px bg-white/10 xl:left-[49px]" />

        <div className="space-y-16 xl:space-y-20 2xl:space-y-24">
          {steps.map((step, index) => (
            <TimelineStep key={step.key} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
