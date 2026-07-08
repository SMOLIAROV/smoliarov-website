"use client"

import { useMobileMenu } from "./hooks"
import { NavigationDesktop } from "./NavigationDesktop"

import { NavigationDesktopCTA } from "./NavigationDesktopCTA"

import { NavigationLogo } from "./NavigationLogo"
import { NavigationMobileMenu } from "./NavigationMobileMenu"
import { NavigationMobileMenuButton } from "./NavigationMobileMenuButton"

export function NavigationSection() {
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <header className="fixed z-50 top-4 left-4 right-4">
      <nav className="mx-auto bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]">
        <div className="flex items-center justify-between px-6 lg:px-8 h-14">
          <NavigationLogo />
          <NavigationDesktop />
          <NavigationDesktopCTA />
          <NavigationMobileMenuButton isOpen={isOpen} onClick={toggle} />
        </div>
      </nav>

      <NavigationMobileMenu isOpen={isOpen} onClose={close} />
    </header>
  )
}
