import Image from "next/image"

export function HeroImage() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
      <Image
        src="/images/solutions/sites.webp"
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 1024px) 0px, 50vw"
      />
    </div>
  )
}
