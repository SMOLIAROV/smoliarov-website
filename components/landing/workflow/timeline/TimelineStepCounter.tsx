export function TimelineStepCounter({ index }: { index: number }) {
  return (
    <div className="hidden shrink-0 lg:block">
      <div className="sticky top-24 z-20 flex size-[88px] items-center justify-center rounded-2xl border border-foreground/15 bg-black xl:size-[100px]">
        <span className="select-none font-mono text-2xl font-bold tracking-tighter text-white/90 xl:text-3xl">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
