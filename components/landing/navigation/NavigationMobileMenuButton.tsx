import { Menu, X } from "lucide-react"
import { MobileMenuButtonProps } from "./types"

export function NavigationMobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps){
    return (
    <button
      onClick={onClick}
      className="xl:hidden p-2 text-foreground transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  )
}