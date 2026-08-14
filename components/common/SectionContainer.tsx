import type { ReactNode } from "react"

import { cn } from "@/lib/utils/cn"

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export function SectionContainer({ children, className }: PageContainerProps) {
  return (
    <section className={cn("relative py-16 md:py-24", className)}>
      {children}
    </section>
  )
}
