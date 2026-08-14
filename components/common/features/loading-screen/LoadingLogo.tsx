import { cn } from "@/lib/utils/cn"

import { LoadingLogoProps } from "./types"

export function LoadingLogo({ isComplete }: LoadingLogoProps) {
  return (
    <div
      className={cn(
        "relative mb-8 md:mb-12 transition-all duration-700",
        isComplete ? "scale-110 opacity-0" : "scale-100 opacity-100"
      )}
    >
      <h1 className="text-2xl md:text-4xl font-display text-white tracking-tight">
        {["S", "M", "O", "L", "I", "A", "R", "O", "V"].map((letter, i) => (
          <span
            key={i}
            className="inline-block animate-char-in"
            style={{ animationDelay: `${(i + 6) * 0.05}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <p
        className="text-center text-white/40 text-xs md:text-sm mt-3 font-mono animate-char-in"
        style={{ animationDelay: "0.8s" }}
      >
        SMART SERVICES
      </p>
    </div>
  )
}
