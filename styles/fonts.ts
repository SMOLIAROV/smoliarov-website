import {
  Syne,
  Space_Grotesk,
  JetBrains_Mono,
  Space_Mono,
  Press_Start_2P,
} from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const pressStart2P = Press_Start_2P({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-pixel",
})

export const fontVariables = [
  syne.variable,
  spaceGrotesk.variable,
  jetbrainsMono.variable,
  spaceMono.variable,
  pressStart2P.variable,
].join(" ")
