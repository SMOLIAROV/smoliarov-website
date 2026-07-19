import { WorkflowStep } from "@/constants/workflow/workflow.data"

export interface WorkflowMobileSliderProps {
  steps: WorkflowStep[]
}

export interface TimelineStepProps {
  step: WorkflowStep
  index: number
}

export interface WorkflowMobileSliderDotsProps {
  total: number
  activeIndex: number
  onDotClick: (_index: number) => void
}
