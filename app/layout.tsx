import "@/styles/global.css"

import { fontVariables } from "@/styles/fonts"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} font-sans antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  )
}
