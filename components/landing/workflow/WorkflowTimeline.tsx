"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { workflowSteps } from "@/constants/workflow/workflow.data"
import { TimelineStep } from "./TimelineStep"
import { WorkflowMobileSlider } from "./WorkflowMobileSlider"

export function WorkflowTimeline() {
  const dict = useDict()
  const steps = workflowSteps(dict)

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 pb-16 lg:pb-24">
      <div className="lg:hidden -mx-4">
        <WorkflowMobileSlider steps={steps} />
      </div>

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
    </div>
  )
}
