"use client"

import { Logo } from "@/components/common/Logo"
import { PageContainer } from "@/components/common/PageContainer"
import { useMobileMenu } from "./hooks"
import { NavigationDesktop } from "./NavigationDesktop"

import { NavigationDesktopCTA } from "./NavigationDesktopCTA"

import { NavigationMobileMenu } from "./NavigationMobileMenu"
import { NavigationMobileMenuButton } from "./NavigationMobileMenuButton"

export function NavigationSection() {
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <header className="fixed z-50 top-4 inset-x-0">
      <PageContainer>
        <nav className="bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-xl shadow-lg">
          <div className="flex items-center justify-between px-4 md:px-6 h-14">
            <Logo />
            <NavigationDesktop />
            <NavigationDesktopCTA />
            <NavigationMobileMenuButton isOpen={isOpen} onClick={toggle} />
          </div>
        </nav>
      </PageContainer>

      <NavigationMobileMenu isOpen={isOpen} onClose={close} />
    </header>
  )
}
