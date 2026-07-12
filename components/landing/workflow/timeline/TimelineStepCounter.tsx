export function TimelineStepCounter({ index }: { index: number }) {
  return (
    <div className="flex-shrink-0">
      <div className="hidden lg:block sticky top-24 z-20">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-2xl border border-foreground/15 bg-black">
          <span className="font-mono text-3xl font-bold tracking-tighter text-white/90 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  )
}
