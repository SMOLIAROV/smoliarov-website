import { LEGAL_SLUGS } from '@/constants/legal/legal'
import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'
const locales = ['ru', 'en'] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    '',
    '/reviews',
  ]

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'daily' : 'weekly',
      priority: path === '' ? 1 : 0.8,
    }))
  )

  const legalSlugs = Object.values(LEGAL_SLUGS)

  const legalEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    legalSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/legal/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  )

  return [...staticEntries, ...legalEntries]
}