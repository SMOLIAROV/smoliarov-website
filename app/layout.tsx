import "@/styles/global.css"

import { fontVariables } from "@/styles/fonts"

import React from "react"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={`${fontVariables} font-sans antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  )
}
