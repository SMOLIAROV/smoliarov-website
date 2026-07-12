import Image from "next/image"

export function WorkflowMobileSliderImage({
  image,
  title,
}: {
  image: string
  title: string
}) {
  return (
    <div className="relative w-full aspect-[16/10]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 92vw, 500px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>
  )
}
