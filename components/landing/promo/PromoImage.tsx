import Image from "next/image";
import ImagePromo from "@/public/images/promo.webp"

export function PromoImage() {
    return (
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/15 lg:aspect-auto lg:h-full">
            <Image
              src={ImagePromo}
              alt="PromoImage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>
    )
}