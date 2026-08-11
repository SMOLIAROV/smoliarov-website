export function SectionHeader({
  navigation_id,
  title,
  subtitle,
  description,
}: {
  navigation_id: string
  title: string
  subtitle?: string
  description?: string
}) {
  return (
    <div id={navigation_id} className="mb-6 md:mb-10">
      {subtitle && (
        <span className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-muted-foreground mb-3 md:mb-6">
          <span className="w-6 md:w-12 h-px bg-foreground/30" />
          {subtitle}
        </span>
      )}

      <div className="mb-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="whitespace-pre-line text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1] transition-all duration-1000 text-balance opacity-100 translate-y-0">
          {title}
        </h2>
      </div>

      {description && (
        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
