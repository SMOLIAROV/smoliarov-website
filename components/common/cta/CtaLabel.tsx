"use client"

import { MessageCircle } from "lucide-react"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function CtaLabel() {
  const dict = useDict()

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full mb-6">
      <MessageCircle className="w-3.5 h-3.5" />
      <span className="text-xs font-mono uppercase tracking-widest">
        {dict.cta.free_consultation}
      </span>
    </div>
  )
}
