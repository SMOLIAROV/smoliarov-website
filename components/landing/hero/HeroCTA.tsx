"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useVisibility } from "@/hooks/useVisibility"
import { NAVIGATION } from "@/constants/navigation/navigation"

export function HeroCTA() {
  const dict = useDict()
  const isVisible = useVisibility()

  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-300 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <Button
        size="lg"
        className="rounded-lg bg-white hover:bg-white/90 text-black px-5 md:px-8 h-11 md:h-12 text-sm"
        asChild
      >
        <a href={NAVIGATION.CONTACT_FORM}>
          {dict.common.discuss_task}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="rounded-lg border-white/30 text-white hover:bg-white/10 px-5 md:px-8 h-11 md:h-12 text-sm"
        asChild
      >
        <a href={NAVIGATION.EXAMPLES}>{dict.hero.view_examples}</a>
      </Button>
    </div>
  )
}
