"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function NotFoundBadge() {
  const dict = useDict()

  return (
    <span className="inline-flex items-center gap-2 text-xs text-foreground/60">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_2px_rgba(252,211,77,0.6)] animate-pulse" />
      {dict.not_found.badge} 404
    </span>
  )
}
