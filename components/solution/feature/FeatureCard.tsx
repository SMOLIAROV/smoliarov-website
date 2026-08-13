import { SolutionFeature } from "@/constants/solution/types"
import { cn } from "@/lib/utils/cn"

export function FeatureCard({
  feature,
  className,
}: {
  feature: SolutionFeature
  className?: string
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-foreground/15 bg-card/30 p-6 transition-colors hover:border-foreground/30 md:p-7",
        className
      )}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/20 transition-colors group-hover:border-foreground/40">
        <feature.icon className="h-5 w-5 text-foreground/70" />
      </div>

      <h3 className="mb-2 font-display text-lg leading-tight md:text-xl">
        {feature.title}
      </h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  )
}
