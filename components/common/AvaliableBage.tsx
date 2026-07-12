"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function AvaliableBage() {
  const dict = useDict()

  return (
    <span className="inline-flex items-center gap-2 text-xs text-foreground/50 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      {dict.common.avaliable}
    </span>
  )
}
