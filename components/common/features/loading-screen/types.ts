import { ReactNode } from "react"

export interface LoadingScreenContextValue {
  progress: number
  isComplete: boolean
  isHidden: boolean
}

export interface LoadingScreenProviderProps {
  value: LoadingScreenContextValue
  children: ReactNode
}

export interface LoadingLogoProps {
  isComplete: boolean
}

export interface LoadingProgressProps {
  progress: number
  isComplete: boolean
}
