"use client"

import { useLocaleSwitch } from "@/lib/i18n/hooks/useLocaleSwitch"
import { Globe } from "lucide-react"
import Link from "next/link"

export function SwitchLocaleButton() {
    const { otherLocale, switchLocalePath } = useLocaleSwitch()

    return (
        <Link
            href={switchLocalePath}
            className="flex items-center gap-1.5 text-xs text-foreground/70 hover:text-foreground transition-colors"
        >
            <Globe className="w-4 h-4" />
            {otherLocale.toUpperCase()}
        </Link>
    )
}