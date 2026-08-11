import Image from "next/image"

export function HeroImage({ image }: { image: string }) {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[420px] overflow-hidden md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[560px]">
      <Image
        src={image}
        alt="Hero"
        fill
        priority
        className="object-cover object-center"
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1023px) 320px,
          (max-width: 1279px) 400px,
          (max-width: 1535px) 500px,
          560px
        "
      />
    </div>
  )
}
