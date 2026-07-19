import type { Metadata } from "next"

const siteUrl = process.env.SITE_URL || 'https://localhost:3000'


export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Разработка сайтов, CRM, веб-приложений и автоматизация бизнеса",
    template: "%s | SMOLIAROV",
  },

  description:
    "Разрабатываем сайты, CRM-системы, веб-приложения, Telegram-ботов и цифровые решения для бизнеса. Автоматизируем продажи, обработку заявок, документооборот и внутренние процессы. Индивидуальная разработка под ключ.",

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
    "разработка веб-сервисов",
    "цифровые решения",
    "цифровые решения для бизнеса",
    "разработка ПО",
    "создание CRM",
    "личный кабинет",
    "SaaS",
    "AI чат-бот",
    "автоматизация продаж",
  ],

  authors: [
    {
      name: "Денис Смоляров",
    },
  ],

  creator: "Денис Смоляров",

  publisher: "SMOLIAROV",

  category: "Software Development",

  applicationName: "SMOLIAROV",

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
  },

  icons: {
    icon: [
      {
        url: "images/metadata/favicon.ico",
      },
    ],

    apple: [
      {
        url: "images/metadata/apple-touch-icon.png",
      },
    ],
  },

  openGraph: {
    type: "website",

    locale: "ru_RU",

    url: siteUrl,

    siteName: "SMOLIAROV",

    title: "Разработка сайтов, CRM, веб-приложений и автоматизация бизнеса",

    description:
      "Создаем сайты, CRM-системы, веб-приложения, Telegram-ботов и цифровые сервисы для бизнеса. Помогаем автоматизировать процессы и увеличить эффективность компании.",

    images: [
      {
        url: "images/metadata/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Разработка сайтов и автоматизация бизнеса",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Разработка сайтов, CRM, веб-приложений и автоматизация бизнеса",

    description:
      "Сайты, CRM, Telegram-боты, веб-приложения и автоматизация процессов под ключ.",

    images: ["images/metadata/og-image.jpg"],
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
