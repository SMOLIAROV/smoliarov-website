import Image from "next/image"

import { WorkflowStep } from "@/constants/workflow/workflow.data"

export function TimelineStepImage({ step }: { step: WorkflowStep }) {
  return (
    <div className="flex w-full shrink-0 items-center lg:w-[340px] xl:w-[400px] 2xl:w-[440px] ">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black lg:rounded-2xl">
        <Image
          src={step.image}
          alt={step.title}
          fill
          sizes="(max-width: 1279px) 340px, (max-width: 1535px) 400px, 440px"
          className="object-contain"
        />
      </div>
    </div>
  )
}
