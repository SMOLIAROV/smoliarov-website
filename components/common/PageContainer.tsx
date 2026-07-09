import type { ReactNode } from "react"

import { cn } from "@/lib/utils/cn"

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  )
}
