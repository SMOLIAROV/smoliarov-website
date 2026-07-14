"use client"

import Image from "next/image"
import handsImage from "@/public/images/hands.webp"

export function HandsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full">
        <Image
          src={handsImage}
          alt=""
          className="object-cover w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>
    </section>
  )
}
