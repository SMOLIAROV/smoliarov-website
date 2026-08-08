import type { Metadata } from "next"

import { getAlternates } from "./getAlternates"
import { siteMetadata } from ".."
import { Dictionary } from "@/lib/i18n/dictionaries"
import { Locale } from "@/lib/i18n/config"

interface MetadataConfig {
  route: (_locale: Locale) => string
  title: (_dict: Dictionary) => string
  description: (_dict: Dictionary) => string
  keywords?: readonly string[]
}

export function buildPageMetadata(
  config: MetadataConfig,
  locale: Locale,
  dict: Dictionary
): Metadata {
  const title = config.title(dict)
  const description = config.description(dict)

  return {
    ...siteMetadata,

    title: title,

    description: description,

    keywords: config.keywords ? [...config.keywords] : undefined,

    alternates: getAlternates(config.route, locale),
  }
}
