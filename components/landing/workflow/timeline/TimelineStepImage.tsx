import { WorkflowStep } from "@/constants/workflow/workflow.data"
import Image from "next/image"

export function TimelineStepImage({ step }: { step: WorkflowStep }) {
  return (
    <div className="lg:w-[440px] xl:w-[500px] flex-shrink-0 -mx-6 -mb-8 lg:mx-0 lg:mb-0">
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:rounded-r-2xl">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 500px"
        />
      </div>
    </div>
  )
}
