import { MobileMenuCloseButtonProps } from "./types";
import { X } from "lucide-react"

export function NavigationMobileMenuCloseButton({
  onClose,
}: MobileMenuCloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-6 right-6 p-2 text-foreground hover:text-muted-foreground transition-colors z-50"
      aria-label="Close menu"
    >
      <X className="w-8 h-8" />
    </button>
  )
}