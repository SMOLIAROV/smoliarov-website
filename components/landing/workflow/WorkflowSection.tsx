import { PageContainer } from "@/components/common/PageContainer"
import { WorkflowHeader } from "./WorkflowHeader"
import { WorkflowTimeline } from "./workflow_timline/WorkflowTimeline"

export function WorkflowSection() {
  return (
    <section className="relative py-16 md:py-24 bg-black">
      <PageContainer>
        <WorkflowHeader />
        <WorkflowTimeline />
      </PageContainer>
    </section>
  )
}
