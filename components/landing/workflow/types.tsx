import { WorkflowStep } from "@/constants/workflow/workflow.data"

export interface WorkflowMobileSliderProps {
  steps: WorkflowStep[]
}

export interface TimelineStepProps {
  step: WorkflowStep
  index: number
}
