"use client"

import Image from "next/image"
import type { WorkflowStep } from "@/constants/workflow/workflow.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

interface TimelineStepProps {
  step: WorkflowStep
  index: number
}

export function TimelineStep({ step, index }: TimelineStepProps) {
  const dict = useDict()
  return (
    <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-14">
      <div className="flex-shrink-0">
        <div className="hidden lg:block sticky top-24 z-20">
          <div className="w-[100px] h-[100px] flex items-center justify-center rounded-2xl border border-white/15 bg-black">
            <span className="font-mono text-3xl font-bold tracking-tighter text-white/90 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 rounded-2xl border border-white/15 bg-black p-6 md:p-8">
          <div className="flex-1 lg:max-w-[520px]">
            <span className="font-mono text-sm tracking-[2px] text-white/50">
              {dict.common.step.toUpperCase()}{" "}
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-3xl md:text-4xl font-display tracking-tight mb-5">
              {step.title}
            </h3>

            <p className="text-white/75 text-lg leading-relaxed mb-8">
              {step.description}
            </p>

            <div className="space-y-3 pl-1">
              {step.details.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-white/80 text-[15px]"
                >
                  <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[440px] xl:w-[500px] flex-shrink-0 -mx-6 -mb-8 lg:mx-0 lg:mb-0">
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:rounded-r-2xl">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
