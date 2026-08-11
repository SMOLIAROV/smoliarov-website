"use client"

import { WorkflowTimeline } from "./workflow_timline/WorkflowTimeline"
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { SectionContainer } from "@/components/common/SectionContainer"

export function WorkflowSection() {
  const dict = useDict()

  return (
    <SectionContainer>
      <SectionHeader
        navigation_id={NAVIGATION.WORKFLOW}
        title={dict.workflow.title}
        subtitle={dict.workflow.subtitle}
        description={dict.workflow.description}
      />
      <WorkflowTimeline />
    </SectionContainer>
  )
}
