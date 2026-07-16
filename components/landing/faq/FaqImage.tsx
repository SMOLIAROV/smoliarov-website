"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import Image from "next/image"
import StairImage from "@/public/images/stair.webp"

export function FaqImage() {
  const dict = useDict()

  return (
    <div className="hidden lg:block lg:col-span-4 transition-all duration-1000 delay-200">
      <div className="sticky top-24">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-foreground/15">
          <Image
            src={StairImage}
            alt="Stair"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <p className="text-xs text-muted-foreground/60 mt-4 font-mono text-center">
          {dict.faq.image_caption}
        </p>
      </div>
    </div>
  )
}
