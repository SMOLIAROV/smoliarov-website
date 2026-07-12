import { WorkflowStep } from "@/constants/workflow/workflow.data"

export function TimelineHeaderDetails({ step }: { step: WorkflowStep }) {
  return step.details.map((detail, i) => (
    <div key={i} className="flex items-start gap-3 text-white/80 text-[15px]">
      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
      <span>{detail}</span>
    </div>
  ))
}
