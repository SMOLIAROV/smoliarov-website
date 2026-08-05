"use client"

export function HeroMainHeadline({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-6 md:mb-8">
      <h1 className="text-left text-[clamp(2rem,6vw,5rem)] font-display leading-[1] tracking-tight text-white transition-all duration-1000">
        <span className="block text-balance">{title}</span>
      </h1>

      <p className="mt-3 md:mt-4 text-lg md:text-xl lg:text-2xl text-white/80 font-display transition-all duration-1000 delay-100">
        {subtitle}
      </p>
    </div>
  )
}
