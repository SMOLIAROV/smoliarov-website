import { cn } from "@/lib/utils/cn"
import { BaseLinkButton } from "./BaseLinkButton"
import { ButtonProps } from "./types"

export function WhiteButton({ href, title, className, onClick }: ButtonProps) {
  return (
    <BaseLinkButton
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg bg-foreground px-4 text-xs text-background transition-colors hover:bg-foreground/90",
        className
      )}
    >
      <span>{title}</span>
    </BaseLinkButton>
  )
}
