"use client"
import { useDict } from "@/lib/i18n/hooks/useDict";
import { MobileMenuLinksProps } from "./types";
import { getNavLinks } from "@/constants/navigation/getNavLinks";

export function NavigationMobileMenuLinks({ isOpen, onClose }: MobileMenuLinksProps){
    const dict = useDict()
    const navLinks = getNavLinks(dict)

    return (
    <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-6">
      {navLinks.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className={`text-2xl sm:text-3xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isOpen ? `${i * 75}ms` : "0ms" }}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}