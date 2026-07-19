import { ReactNode } from "react"

export interface EmailLayoutProps {
  preview: string
  children: ReactNode
}

export interface EmailTextProps {
  children: ReactNode
  color?: string
}
