"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function WorkflowMobileSliderCounter({ index }: { index: number }) {
  const dict = useDict()

  return (
    <div className="mb-4">
      <span className="font-mono text-sm tracking-[2px] text-white/50">
        {dict.common.step.toUpperCase()} {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  )
}
