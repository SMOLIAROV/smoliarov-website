"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import type { Solution } from "../../../constants/solutions/solutions.data"

interface SolutionCardProps {
  solution: Solution
  index: number
  className?: string
}

export function SolutionCard({
  solution,
  index,
  className,
}: SolutionCardProps) {
  const Icon = solution.icon

  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-foreground/10 bg-card/30 backdrop-blur-sm rounded-3xl h-full flex",
        className
      )}
    >
      <div className="flex-1 p-6 md:p-8 flex flex-col relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 rounded-2xl">
            <Icon className="w-6 h-6 text-foreground/70" />
          </div>
        </div>

        <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">
          {solution.title}
        </h3>

        <p className="text-muted-foreground text-[15px] leading-relaxed flex-1">
          {solution.description}
        </p>
      </div>

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

      <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
        <span className="text-xs font-mono text-foreground/40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight className="w-4 h-4 text-foreground/40" />
      </div>
    </div>
  )
}
