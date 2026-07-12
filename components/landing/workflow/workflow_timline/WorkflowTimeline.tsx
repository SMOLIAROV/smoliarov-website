"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { workflowSteps } from "@/constants/workflow/workflow.data"
import { WorkflowMobileSlider } from "../workflow_mobile/WorkflowMobileSlider"
import { WorkflowTimelineSteps } from "./WorkflowTimelineSteps"

export function WorkflowTimeline() {
  const dict = useDict()
  const steps = workflowSteps(dict)

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
      <WorkflowMobileSlider steps={steps} />
      <WorkflowTimelineSteps steps={steps} />
    </div>
  )
}
