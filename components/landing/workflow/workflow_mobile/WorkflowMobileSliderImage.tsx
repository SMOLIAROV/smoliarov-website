import Image from "next/image"

interface WorkflowMobileSliderImageProps {
  image: string
  title: string
}

export function WorkflowMobileSliderImage({
  image,
  title,
}: WorkflowMobileSliderImageProps) {
  return (
    <div className="relative aspect-[16/10] w-full bg-black px-4 pt-5">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 639px) calc(100vw - 64px), 528px"
          className="object-contain"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
    </div>
  )
}
