import { Solution } from "@/constants/solution/types"

export function SolutionsCardsHeader({ solution }: { solution: Solution }) {
  const Icon = solution.icon

  return (
    <div className="flex-1 p-6 md:p-8 flex flex-col relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 rounded-xl">
          <Icon className="w-6 h-6 text-foreground/70" />
        </div>
      </div>

      <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">
        {solution.content.title}
      </h3>

      <p className="text-muted-foreground text-[15px] leading-relaxed flex-1">
        {solution.content.description}
      </p>
    </div>
  )
}
