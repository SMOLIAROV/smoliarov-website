export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "SMOLIAROV",
                url: siteUrl,
                logo: {
                    "@type": "ImageObject",
                    url: `${siteUrl}/images/metadata/logo.png`,
                    width:512,
                    height:512
                },
                image: `${siteUrl}/images/metadata/og-image.png`,
                founder: {
                    "@type": "Person",
                    name: "Денис Смоляров",
                },
                foundingDate: "2026",
                email: "info@smoliarov.online",
                sameAs: [
                    "https://www.instagram.com/smoliarov_inst",
                    "https://t.me/smoliarov_cases",
                    "https://www.youtube.com/@smoliarov_youtube",
                    "https://www.threads.com/@smoliarov_threads",
                    "https://www.tiktok.com/@smoliarov.site"
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    availableLanguage: ["Russian", "English"],
                },
                knowsAbout: [
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
                ]
            },
            {
                "@type":"WebPage",
                "@id":`${siteUrl}/#webpage`,
                url: siteUrl,
                name:"Разработка сайтов",
                description:"Разрабатываем сайты, CRM-системы, веб-приложения, Telegram-ботов и цифровые решения для бизнеса. Автоматизируем продажи, обработку заявок, документооборот и внутренние процессы. Разработка под ключ.",
                isPartOf:{
                    "@id":`${siteUrl}/#website`
                },
                about:{
                    "@id":`${siteUrl}/#organization`
                },
                mainEntity: {
                    "@id": `${siteUrl}/#service`,
                },
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "SMOLIAROV",
                description:
                "Разрабатываем сайты, CRM-системы, веб-приложения, Telegram-ботов и цифровые решения для бизнеса. Автоматизируем продажи, обработку заявок, документооборот и внутренние процессы. Разработка под ключ.",
                publisher: {
                    "@id": `${siteUrl}/#organization`,
                },
                inLanguage: ["ru", "en"],
            },
            {
                "@type": "ProfessionalService",
                "@id": `${siteUrl}/#service`,
                name: "SMOLIAROV — Разработка цифровых решений",
                brand: {
                    "@type":"Brand",
                    name:"SMOLIAROV",
                },
                url: siteUrl,
                image: `${siteUrl}/images/metadata/og-image.jpg`,
                description:
                "Разрабатываем сайты, CRM-системы, веб-приложения, Telegram-ботов и цифровые решения для бизнеса. Автоматизируем продажи, обработку заявок, документооборот и внутренние процессы. Разработка под ключ.",
                provider: {
                    "@id": `${siteUrl}/#organization`,
                },
                areaServed: {
                    "@type": "Place",
                    name: "Worldwide"
                },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Услуги",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Разработка сайтов",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "CRM-системы",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Telegram-боты",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Автоматизация бизнеса",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Веб-приложения",
                            },
                        },
                    ],
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    email: "info@smoliarov.online",
                    availableLanguage: ["ru", "en"],
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: 4.9,
                    bestRating: 5,
                    worstRating: 4,
                    reviewCount: 8,
                },
                review: [
                    {
                        "@type": "Review",
                        author: {
                            "@type":"Person",
                            name:"Артем"
                        },
                        reviewRating:{
                            "@type":"Rating",
                            ratingValue:5
                        },
                        reviewBody:"Уехал в отпуск и ни разу не переживал за брони. Календарь сам всё отслеживал, клиенты получали уведомления, двойных накладок не было. Наконец-то выдохнул, огромное спасибо команде!"
                    },
                    {
                        "@type": "Review",
                        author: {
                            "@type":"Person",
                            name:"Екатерина"
                        },
                        reviewRating:{
                            "@type":"Rating",
                            ratingValue:5
                        },
                        reviewBody:"Заказы перестали теряться, всё летит в систему автоматически. Менеджеры больше не сидят в Excel, а занимаются клиентами. Скорость обработки выросла в разы — очень довольны."
                    },
                    {
                        "@type": "Review",
                        author: {
                            "@type":"Person",
                            name:"Дмитрий"
                        },
                        reviewRating:{
                            "@type":"Rating",
                            ratingValue:5
                        },
                        reviewBody:"Согласование с клиентами перестало быть головной болью. Всё в одной системе, уведомления приходят автоматически, документы всегда под рукой. Сократили время на 60%, клиенты счастливы."
                    },
                ]
            },
        ],
    }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}