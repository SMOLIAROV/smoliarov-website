"use client"

import Image from "next/image"
import FooterImage from "@/public/images/footer.webp"
import { Logo } from "@/components/common/Logo"
import { PageContainer } from "@/components/common/PageContainer"
import { FooterSocial } from "./FooterSocial"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { FooterNavigation } from "./FooterNavigation"
import { FooterLegal } from "./FooterLegal"
import { FooterBottom } from "./FooterBottom"

export function FooterSection({
  navigationType,
  sections,
}: {
  navigationType: string
  sections: string[]
}) {
  const dict = useDict()
  return (
    <footer className="relative">
      <div className="relative w-full overflow-hidden bg-black">
        <div className="relative mx-auto aspect-[1920/600] w-full max-w-[1600px]">
          <Image
            src={FooterImage}
            alt="Footer image"
            priority
            className="h-auto w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>
      </div>

      <PageContainer className="relative z-10">
        <div className="py-6 md:py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2">
              <Logo />

              <p className="text-white/50 leading-relaxed mt-5 mb-5 max-w-sm text-xs md:text-sm">
                {dict.common.slogan}
              </p>

              <FooterSocial />
            </div>

            <FooterNavigation
              navigationType={navigationType}
              sections={sections}
            />
            <FooterLegal />
          </div>
        </div>
        <FooterBottom />
      </PageContainer>
    </footer>
  )
}
