"use client"

import { getLegalLinks } from "@/constants/legal/getLegalLinks"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"
import Link from "next/link"

export function FooterLegal() {
  const dict = useDict()
  const locale = useLocale()

  return (
    <div>
      <h3 className="text-xs md:text-sm font-medium text-white mb-4">
        {dict.footer.legal.title}
      </h3>

      <div className="space-y-2 text-xs md:text-sm text-white/40">
        <p>{dict.common.name}</p>
        <p>{dict.footer.legal.unp}</p>

        {getLegalLinks(dict, locale).map((link) => (
          <Link
            key={link.slug}
            href={link.href}
            className="block hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
