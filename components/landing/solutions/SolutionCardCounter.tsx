import { ArrowUpRight } from "lucide-react"

export function SolutionCardCounter({ index }: { index: number }) {
  return (
    <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
      <span className="text-xs font-mono text-foreground/40">
        {String(index + 1).padStart(2, "0")}
      </span>

      <ArrowUpRight className="w-4 h-4 text-foreground/40" />
    </div>
  )
}
