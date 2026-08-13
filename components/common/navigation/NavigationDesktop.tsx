"use client"

import { getNavLinks } from "@/constants/navigation/getNavLinks"

import { useDict } from "@/lib/i18n/hooks/useDict"

export function NavigationDesktop({
  navigationType,
  sections,
}: {
  navigationType: string
  sections: string[]
}) {
  const dict = useDict()
  const navLinks = getNavLinks({ dict, navigationType, sections })

  return (
    <div className="hidden xl:flex items-center gap-6 xl:gap-8">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-xs transition-colors duration-300 relative group text-foreground/70 hover:text-foreground"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-foreground" />
        </a>
      ))}
    </div>
  )
}
