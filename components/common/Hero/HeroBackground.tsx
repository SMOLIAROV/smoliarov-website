import Image from "next/image"

export function HeroBackground({ image_url }: { image_url: string }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="mx-auto w-full max-w-[1920px]">
          <Image
            src={image_url}
            alt="HeroImage"
            width={1920}
            height={600}
            priority
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden">
        <div className="relative w-full overflow-hidden">
          <Image
            src={image_url}
            alt="HeroImage"
            width={1920}
            height={600}
            priority
            className="
              block
              h-auto
              w-[1100px]
              max-w-none
              translate-x-[-50%]
              ml-[50%]
            "
          />
        </div>
      </div>

      {/* Mobile — НЕ ТРОГАЕМ */}
      <div className="block md:hidden">
        <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden">
          <Image
            src={image_url}
            alt="HeroImage"
            width={1920}
            height={600}
            priority
            className="
              h-auto
              w-[800px]
              max-w-none
              -translate-x-[100px]
            "
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/50" />
    </div>
  )
}
