import fs from "node:fs/promises"
import path from "node:path"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getLegalDoc } from "@/constants/legal/getLegalDocs"
import { isLegalSlug, LEGAL_DOCS_META } from "@/constants/legal/legal"
import { legalComponents } from "@/lib/mdx/legal-components"
import { PageContainer } from "@/components/common/PageContainer"
import { ROUTES } from "@/constants/routes"
import { i18n } from "@/lib/i18n/config"

export function generateStaticParams() {
  return i18n.locales.flatMap((locale) =>
    LEGAL_DOCS_META.map((doc) => ({ locale, slug: doc.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isValidLocale(locale) || !isLegalSlug(slug)) return {}

  const dict = await getDictionary(locale)
  return { title: getLegalDoc(dict, slug)?.title }
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isValidLocale(locale) || !isLegalSlug(slug)) {
    notFound()
  }

  const dict = await getDictionary(locale as Locale)
  const doc = getLegalDoc(dict, slug)

  if (!doc) notFound()

  const filePath = path.join(process.cwd(), "content/legal", `${slug}.mdx`)
  const source = await fs.readFile(filePath, "utf-8")

  return (
    <div className="min-h-screen bg-background">
      <PageContainer>
        <div className="max-w-3xl mx-auto py-10 md:py-14">
          <Link
            href={ROUTES.home(locale)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.common.back_home}
          </Link>

          <article className="mt-10">
            <MDXRemote source={source} components={legalComponents} />
          </article>

          <Link
            href={ROUTES.home(locale)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.common.back_home}
          </Link>
        </div>
      </PageContainer>
    </div>
  )
}
