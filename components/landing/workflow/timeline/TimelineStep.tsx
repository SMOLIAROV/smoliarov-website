import { TimelineStepCounter } from "./TimelineStepCounter"
import { TimelineStepHeader } from "./TimelineStepHeader"
import { TimelineStepImage } from "./TimelineStepImage"
import { TimelineStepProps } from "../types"

export function TimelineStep({ step, index }: TimelineStepProps) {
  return (
    <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-8 xl:gap-12">
      <TimelineStepCounter index={index} />

      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-black lg:flex-row lg:items-stretch lg:gap-6 xl:gap-10 p-6 md:p-8">
          <div className="min-w-0 flex-1">
            <TimelineStepHeader index={index} step={step} />
          </div>

          <TimelineStepImage step={step} />
        </div>
      </div>
    </div>
  )
}
