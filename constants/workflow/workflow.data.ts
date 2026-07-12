import {
  UserCheck,
  FileText,
  Code2,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react"

export type WorkflowStep = {
  key: string
  icon: React.ElementType
  title: string
  description: string
  details: string[]
  image: string
}

type WorkflowDict = {
  workflow: {
    steps: {
      analysis: { title: string; description: string; details: string[] }
      design: { title: string; description: string; details: string[] }
      development: { title: string; description: string; details: string[] }
      testing: { title: string; description: string; details: string[] }
      deploy: { title: string; description: string; details: string[] }
      support: { title: string; description: string; details: string[] }
    }
  }
}

export const workflowSteps = (dict: WorkflowDict): WorkflowStep[] => [
  {
    key: "analysis",
    icon: UserCheck,
    title: dict.workflow.steps.analysis.title,
    description: dict.workflow.steps.analysis.description,
    details: dict.workflow.steps.analysis.details,
    image: "/images/workflow/analysis.webp",
  },
  {
    key: "design",
    icon: FileText,
    title: dict.workflow.steps.design.title,
    description: dict.workflow.steps.design.description,
    details: dict.workflow.steps.design.details,
    image: "/images/workflow/design.webp",
  },
  {
    key: "development",
    icon: Code2,
    title: dict.workflow.steps.development.title,
    description: dict.workflow.steps.development.description,
    details: dict.workflow.steps.development.details,
    image: "/images/workflow/development.webp",
  },
  {
    key: "testing",
    icon: TestTube,
    title: dict.workflow.steps.testing.title,
    description: dict.workflow.steps.testing.description,
    details: dict.workflow.steps.testing.details,
    image: "/images/workflow/testing.webp",
  },
  {
    key: "deploy",
    icon: Rocket,
    title: dict.workflow.steps.deploy.title,
    description: dict.workflow.steps.deploy.description,
    details: dict.workflow.steps.deploy.details,
    image: "/images/workflow/deploy.webp",
  },
  {
    key: "support",
    icon: Headphones,
    title: dict.workflow.steps.support.title,
    description: dict.workflow.steps.support.description,
    details: dict.workflow.steps.support.details,
    image: "/images/workflow/support.webp",
  },
]
