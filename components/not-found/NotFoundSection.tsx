"use client"

import { PageContainer } from "@/components/common/PageContainer"
import { Logo } from "@/components/common/Logo"
import { NotFoundBadge } from "./NotFoundBadge"
import { NotFoundCode } from "./NotFoundCode"
import { NotFoundHeadline } from "./NotFoundHeadline"
import { NotFoundActions } from "./NotFoundActions"
import { HeroBackground } from "../common/Hero/HeroBackground"
import NotFoundImage from "@/public/images/not-found-portal.png"

export function NotFoundSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 z-0">
        <HeroBackground image_url={NotFoundImage.src} />
      </div>

      <PageContainer className="relative z-10 flex flex-1 flex-col">
        <div className="pt-8 md:pt-10">
          <Logo />
        </div>

        <div className="flex-1 flex flex-col items-start justify-center py-16 md:py-0">
          <NotFoundBadge />
          <div className="mt-6">
            <NotFoundCode />
          </div>
          <NotFoundHeadline />
          <NotFoundActions />
        </div>
      </PageContainer>
    </section>
  )
}
