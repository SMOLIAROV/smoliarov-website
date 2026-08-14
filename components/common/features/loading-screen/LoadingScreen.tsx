import { useLoadingScreen } from "./hooks/useLoadingScreen"

import { cn } from "@/lib/utils/cn"

import { LoadingBackground } from "./LoadingBackground"

import { LoadingLogo } from "./LoadingLogo"

import { LoadingProgress } from "./LoadingProgress"

export function LoadingScreen() {
  const { progress, isComplete, isHidden } = useLoadingScreen()

  if (isHidden) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-700",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <LoadingBackground />
      <LoadingLogo isComplete={isComplete} />
      <LoadingProgress progress={progress} isComplete={isComplete} />
    </div>
  )
}
