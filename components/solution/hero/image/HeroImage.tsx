import Image from "next/image"

// {image}: {image: string}
export function HeroImage({ image }: { image: string }) {
  return (
    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 1024px) 0px, 50vw"
      />
    </div>
  )
}
