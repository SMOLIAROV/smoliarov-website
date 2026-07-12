import { TimelineStepCounter } from "./TimelineStepCounter"
import { TimelineStepHeader } from "./TimelineStepHeader"
import { TimelineStepImage } from "./TimelineStepImage"
import { TimelineStepProps } from "../types"

export function TimelineStep({ step, index }: TimelineStepProps) {
  return (
    <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-14">
      <TimelineStepCounter index={index} />

      <div className="flex-1">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 rounded-2xl border border-foreground/15 bg-black p-6 md:p-8">
          <TimelineStepHeader index={index} step={step} />
          <TimelineStepImage step={step} />
        </div>
      </div>
    </div>
  )
}
