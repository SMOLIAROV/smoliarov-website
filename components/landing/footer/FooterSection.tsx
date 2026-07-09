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

export function FooterSection() {
  const dict = useDict()
  return (
    <footer className="relative bg-black">
      <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />

      <div className="relative w-full h-[150px] md:h-[250px] lg:h-[320px] overflow-hidden">
        <Image
          src={FooterImage}
          alt="Footer image"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      <PageContainer className="relative z-10">
        <div className="py-6 md:py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2">
              <Logo />

              <p className="text-white/50 leading-relaxed mt-5 mb-5 max-w-sm text-xs md:text-sm">
                {dict.footer.description}
              </p>

              <FooterSocial />
            </div>

            <FooterNavigation />
            <FooterLegal />
          </div>
        </div>
        <FooterBottom />
      </PageContainer>
    </footer>
  )
}
