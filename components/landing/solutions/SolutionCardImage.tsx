import { Solution } from "@/constants/solutions/solutions.data"
import Image from "next/image"

export function SolutionCardImage({ solution }: { solution: Solution }) {
  return (
    <div className="relative w-2/5 md:w-5/12 lg:w-[42%] hidden sm:block overflow-hidden rounded-r-3xl">
      <Image
        src={solution.image}
        alt={solution.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 42vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
    </div>
  )
}
