import { WorkflowStep } from "@/constants/workflow/workflow.data"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { TimelineHeaderDetails } from "./TimelineHeaderDetails"

export function TimelineStepHeader({
  index,
  step,
}: {
  index: number
  step: WorkflowStep
}) {
  const dict = useDict()

  return (
    <div className="flex-1 lg:max-w-[520px]">
      <span className="font-mono text-sm tracking-[2px] text-white/50">
        {dict.common.step.toUpperCase()} {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="text-3xl md:text-4xl font-display tracking-tight mb-5">
        {step.title}
      </h3>

      <p className="text-white/75 text-lg leading-relaxed mb-8">
        {step.description}
      </p>

      <div className="space-y-3 pl-1">
        <TimelineHeaderDetails step={step} />
      </div>
    </div>
  )
}
