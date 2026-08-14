import { LEGAL_SLUGS } from "@/constants/legal/legal"
import { SOLUTION_TYPES } from "@/constants/solution/solution.data"
import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!
const locales = ["ru", "en"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/reviews"]

  const rootEntry = [
    {
      url: siteUrl,
    },
  ]

  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
    }))
  )

  const solutionEntries = locales.flatMap((locale) =>
    Object.values(SOLUTION_TYPES).map((solution) => ({
      url: `${siteUrl}/${locale}/solution/${solution}`,
    }))
  )

  const legalEntries = locales.flatMap((locale) =>
    Object.values(LEGAL_SLUGS).map((slug) => ({
      url: `${siteUrl}/${locale}/legal/${slug}`,
    }))
  )

  return [...rootEntry, ...staticEntries, ...solutionEntries, ...legalEntries]
}
