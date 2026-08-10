import Image from "next/image"

export function HeroImage({ image }: { image: string }) {
  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden">
      <Image
        src={image}
        alt="Hero"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}
