import Image from "next/image"
import HeroImage from "@/public/images/hero.webp"

export function HeroSectionBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={HeroImage}
        alt="Hero background image"
        className="w-full h-full object-cover object-center opacity-80"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
    </div>
  )
}
