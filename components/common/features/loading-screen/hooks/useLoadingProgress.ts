"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export function useLoadingProgress() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setProgress(0)
    setIsHidden(false)

    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          return 100
        }
        return Math.min(prev + 6, 100)
      })
    }, 16)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [pathname])

  useEffect(() => {
    if (progress < 100) return

    timeoutRef.current = setTimeout(() => {
      setIsHidden(true)
    }, 450)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [progress])

  return {
    progress,
    isComplete: progress === 100,
    isHidden,
  }
}
