import { WorkflowHeader } from "./WorkflowHeader"
import { WorkflowTimeline } from "./workflow_timline/WorkflowTimeline"

export function WorkflowSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <WorkflowHeader />
        <WorkflowTimeline />
      </div>
    </section>
  )
}
