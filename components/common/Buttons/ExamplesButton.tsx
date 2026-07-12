"use client"

import { Button } from "@/components/ui/button"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { useDict } from "@/lib/i18n/hooks/useDict"

export function ExamplesButton() {
  const dict = useDict()

  return (
    <Button
      size="lg"
      variant="outline"
      className="rounded-lg border-white/30 text-white hover:bg-white/10 px-5 md:px-8 h-11 md:h-12 text-sm"
      asChild
    >
      <a href={useNavLink(NAVIGATION.EXAMPLES).href}>
        {dict.hero.view_examples}
      </a>
    </Button>
  )
}
