import { NavigationMobileMenuBottomCTA } from "./NavigationMobileMenuBottomCTA";
import { NavigationMobileMenuCloseButton } from "./NavigationMobileMenuCloseButton";
import { NavigationMobileMenuLinks } from "./NavigationMobileMenuLinks";
import { MobileMenuProps } from "./types";

export function NavigationMobileMenu({ isOpen, onClose }: MobileMenuProps){
    return (
        <div
        className={`xl:hidden fixed inset-0 bg-background z-[45] transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
        <NavigationMobileMenuCloseButton onClose={onClose} />

        <div className="flex flex-col h-full px-6 pt-20 pb-8 overflow-y-auto">
            <NavigationMobileMenuLinks isOpen={isOpen} onClose={onClose} />
            <NavigationMobileMenuBottomCTA isOpen={isOpen} onClose={onClose} />
        </div>
        </div>
    )
}