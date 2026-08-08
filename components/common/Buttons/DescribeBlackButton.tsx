"use client"

import { ArrowRight } from "lucide-react"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useNavLink } from "@/hooks/navigation/useNavLink"
import { NAVIGATION } from "@/constants/navigation/navigation"
import { Button } from "../../ui/button"

export function DescribeBlackButton() {
  const dict = useDict()

  return (
    <Button
      className="rounded-xl bg-black hover:bg-black/90 text-black px-5 md:px-8 h-11 md:h-12 text-sm"
      asChild
    >
      <a
        href={useNavLink(NAVIGATION.CONTACT_FORM).href}
        className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-white font-medium transition-all rounded-lg group shrink-0"
      >
        {dict.common.discuss_task}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  )
}
