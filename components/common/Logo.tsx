"use client"
import { ROUTES } from "@/constants/routes"
import { useLocale } from "@/lib/i18n/hooks/useLocale"

export function Logo() {
  const locale = useLocale()
  return (
    <a
      href={ROUTES.home(locale)}
      className="inline-flex items-center gap-3 group whitespace-nowrap"
    >
      <div className="relative flex items-center justify-center border w-9 h-9 border-foreground/20 group-hover:border-foreground/40">
        <span className="font-retro font-bold tracking-tighter text-base text-foreground">
          DS
        </span>
        <span className="absolute -top-px -left-px w-2 h-2 border-l border-t border-foreground/40" />
        <span className="absolute -top-px -right-px w-2 h-2 border-r border-t border-foreground/40" />
        <span className="absolute -bottom-px -left-px w-2 h-2 border-l border-b border-foreground/40" />
        <span className="absolute -bottom-px -right-px w-2 h-2 border-r border-b border-foreground/40" />
      </div>
      <div className="flex flex-col">
        <span className="font-retro font-bold uppercase tracking-widest leading-none text-xs text-foreground">
          SMOLIAROV
        </span>
        <span className="font-mono uppercase tracking-[0.3em] text-[8px] text-muted-foreground">
          SMART SERVICES
        </span>
      </div>
    </a>
  )
}
