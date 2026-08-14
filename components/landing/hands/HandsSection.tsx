"use client"

import Image from "next/image"
import handsImage from "@/public/images/hands.webp"

export function HandsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative mx-auto aspect-[1920/600] w-full max-w-[1600px]">
        <Image
          src={handsImage}
          alt="HandsImage"
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </section>
  )
}
