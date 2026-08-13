import { cn } from "@/lib/utils/cn"
import { BaseLinkButton } from "./BaseLinkButton"
import { ButtonProps } from "./types"

export function OutlineButton({
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
        "inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm text-white transition-colors hover:bg-white/10 md:h-12 md:px-8",
        className
      )}
    >
      <span>{title}</span>
    </BaseLinkButton>
  )
}
