"use client"

import Image from "next/image"
import type { WorkflowStep } from "@/constants/workflow/workflow.data"
import { useDict } from "@/lib/i18n/hooks/useDict"

interface WorkflowMobileSliderProps {
  steps: WorkflowStep[]
}

export function WorkflowMobileSlider({ steps }: WorkflowMobileSliderProps) {
  const dict = useDict()

  return (
    <div className="overflow-x-auto snap-x snap-mandatory flex gap-3 pb-8 pl-3 pr-3 scrollbar-hide">
      {steps.map((step, index) => (
        <div
          key={step.key}
          className="w-[calc(100%-12px)] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="relative w-full aspect-[16/10]">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="p-6">
            <div className="mb-4">
              <span className="font-mono text-sm tracking-[2px] text-white/50">
                {dict.common.step.toUpperCase()}{" "}
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-2xl font-display tracking-tight mb-4">
              {step.title}
            </h3>

            <p className="text-white/75 text-[15px] leading-relaxed mb-6">
              {step.description}
            </p>

            <div className="space-y-2.5">
              {step.details.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-white/80 text-sm"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
