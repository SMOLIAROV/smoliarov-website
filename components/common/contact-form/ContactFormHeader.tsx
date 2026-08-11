"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import Image from "next/image"
import WhaleImage from "@/public/images/whale.webp"
import { SectionHeader } from "../SectionHeader/SectionHeader"
import { NAVIGATION } from "@/constants/navigation/navigation"

export function ContactFormHeader() {
  const dict = useDict()

  return (
    <div className="flex flex-col">
      <SectionHeader
        navigation_id={NAVIGATION.CONTACT_FORM}
        title={dict.contact_form.title}
        subtitle={dict.contact_form.subtitle}
        description={dict.contact_form.description}
      />

      <div className="relative hidden lg:block mt-4 transition-all duration-1000 delay-200">
        <div className="relative w-full aspect-[4/3] max-w-[520px] rounded-xl overflow-hidden">
          <Image
            src={WhaleImage}
            alt="Digital whale"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </div>
      </div>
    </div>
  )
}
