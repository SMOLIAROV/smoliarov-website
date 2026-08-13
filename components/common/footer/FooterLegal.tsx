"use client"

import { getFooterLegalDocs } from "@/constants/legal/getLegalDocs"
import { ROUTES } from "@/constants/routes"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"

export function FooterLegal() {
  const dict = useDict()
  const locale = useLocale()
  const docs = getFooterLegalDocs(dict)

  return (
    <div>
      <h3 className="text-xs md:text-sm font-medium text-white mb-4">
        {dict.footer.legal.title}
      </h3>

      <ul className="space-y-2.5 md:space-y-3">
        <p className="text-xs md:text-sm text-white/40">{dict.common.name}</p>
        <p className="text-xs md:text-sm text-white/40">
          {dict.footer.legal.unp}
        </p>

        {docs.map((link) => (
          <li key={link.slug}>
            <a
              href={ROUTES.legal(locale, link.slug)}
              className="text-xs md:text-sm text-white/40 hover:text-white transition-colors"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
