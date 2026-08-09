import { useDict } from "@/lib/i18n/hooks/useDict"

import { LoadingProgressProps } from "./types"

import { cn } from "@/lib/utils/cn"

export function LoadingProgress({
  progress,
  isComplete,
}: LoadingProgressProps) {
  const dict = useDict()

  return (
    <div
      className={cn(
        "relative w-40 md:w-56 transition-all duration-700",
        isComplete ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      )}
    >
      <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-[10px] md:text-xs font-mono">
        <span className="text-white/30">{dict.common.loading}</span>
        <span className="text-white/60 tabular-nums">{progress}%</span>
      </div>
    </div>
  )
}
