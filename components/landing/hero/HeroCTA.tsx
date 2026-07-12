"use client"

import { DescribeButton } from "@/components/common/Buttons/DescribeButton"
import { ExamplesButton } from "@/components/common/Buttons/ExamplesButton"

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
      <DescribeButton />
      <ExamplesButton />
    </div>
  )
}
