import type { Metadata } from "next"
import Favicon from "@/app/favicon.ico"
import AppleTouchIcon from "@/public/images/metadata/apple-touch-icon.png"
import OgImage from "@/public/images/metadata/og-image.png"
import { metadataConfigs } from "./config"
import { buildPageMetadata } from "./utils/buildPageMetadata"
import { ERRORS } from "../errors"
import { Locale } from "../i18n/config"
import { getDictionary } from "../i18n/dictionaries"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  authors: [{ name: "Денис Смоляров" }],
  creator: "Денис Смоляров",
  publisher: "SMOLIAROV",
  applicationName: "SMOLIAROV",

  category: "Software Development",
  classification: "Разработка программного обеспечения",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [{ url: Favicon.src }],
    apple: [{ url: AppleTouchIcon.src }],
  },

  openGraph: {
    type: "website",
    siteName: "SMOLIAROV",

    images: [
      {
        url: OgImage.src,
        width: 1200,
        height: 630,
        alt: "Разработка сайтов и бизнес-сервисов под ключ — SMOLIAROV",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: OgImage.src,
  },

  appleWebApp: {
    capable: true,
    title: "SMOLIAROV",
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export function getMetadata(path: string, locale: Locale): Metadata {
  const dict = getDictionary(locale)

  const config = path
    .split("/")
    .reduce(
      (current, key) => current?.[key as keyof typeof current],
      metadataConfigs as any
    )

  if (!config) {
    throw new Error(`${ERRORS.METADATA.NOT_FOUND}: ${path}`)
  }

  return buildPageMetadata(config, locale, dict)
}
