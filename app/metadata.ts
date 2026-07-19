import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Разработка сайтов, CRM, Telegram-ботов и автоматизация бизнеса",
    template: "%s | SMOLIAROV",
  },

  description:
    "Разрабатываем сайты, CRM-системы, веб-приложения, Telegram-ботов и цифровые решения для бизнеса. Автоматизируем продажи, обработку заявок, документооборот и внутренние процессы. Разработка под ключ.",

  keywords: [
    "разработка сайтов",
    "создание сайтов",
    "разработка CRM",
    "CRM для бизнеса",
    "автоматизация бизнеса",
    "автоматизация бизнес-процессов",
    "Telegram-боты",
    "разработка Telegram-ботов",
    "веб-приложения",
    "разработка веб-приложений",
    "веб-сервисы",
    "цифровые решения для бизнеса",
    "личный кабинет",
    "SaaS разработка",
    "AI чат-бот",
    "автоматизация продаж",
  ],

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

  alternates: {
    canonical: siteUrl,
    languages: {
      "ru-RU": `${siteUrl}/ru`,
      "en-US": `${siteUrl}/en`,
    },
  },

  icons: {
    icon: [{ url: "/images/metadata/favicon.ico" }],
    apple: [{ url: "/images/metadata/apple-touch-icon.png" }],
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "SMOLIAROV",
    title: "Разработка сайтов, CRM, Telegram-ботов и автоматизация бизнеса",
    description:
      "Создаём сайты, CRM-системы, веб-приложения и Telegram-ботов. Автоматизируем продажи, заявки и бизнес-процессы. Разработка под ключ.",
    images: [
      {
        url: "/images/metadata/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMOLIAROV — Разработка сайтов и автоматизация бизнеса",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Разработка сайтов, CRM, Telegram-ботов и автоматизация бизнеса",
    description:
      "Сайты, CRM, Telegram-боты, веб-приложения и автоматизация процессов под ключ.",
    images: ["/images/metadata/og-image.jpg"],
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