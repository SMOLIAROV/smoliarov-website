import { ArrowRight } from "lucide-react"

import { BaseLinkButton } from "./BaseLinkButton"
import { cn } from "@/lib/utils/cn"
import { ButtonProps } from "./types"

export function WhiteButtonWithArrowToRight({
  href,
  title,
  className,
  onClick,
}: ButtonProps) {
  return (
    <BaseLinkButton
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm text-black transition-colors hover:bg-white/90 md:h-12 md:px-8",
        className
      )}
    >
      <span>{title}</span>

      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </BaseLinkButton>
  )
}
