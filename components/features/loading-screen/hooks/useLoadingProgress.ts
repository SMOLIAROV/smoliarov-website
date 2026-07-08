import { useEffect, useState } from "react"

export function useLoadingProgress() {
  const [progress, setProgress] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(interval)
          return 100
        }

        return Math.min(value + 2, 100)
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 100) return

    const timer = setTimeout(() => {
      setIsHidden(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [progress])

  return {
    progress,
    isComplete: progress === 100,
    isHidden,
  }
}
