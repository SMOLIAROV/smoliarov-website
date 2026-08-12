import Image from "next/image"

export function HeroBackground({ image_url }: { image_url: string }) {
  return (
    <>
      <div className="absolute inset-x-0 top-10 h-[45%] md:inset-0 md:h-auto">
        <Image
          src={image_url}
          alt="HeroImage"
          fill
          priority
          className="object-cover object-[80%_center] md:object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50" />
    </>
  )
}
