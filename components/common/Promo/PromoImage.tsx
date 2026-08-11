import Image from "next/image"

export function PromoImage({ image }: { image: string }) {
  return (
    <div
      className="
        relative
        h-[280px]
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-white/15
        sm:h-[320px]
        md:h-[360px]
        lg:h-full
      "
    >
      <Image
        src={image}
        alt="PromoImage"
        fill
        className="object-cover"
        sizes="(max-width: 1023px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    </div>
  )
}
