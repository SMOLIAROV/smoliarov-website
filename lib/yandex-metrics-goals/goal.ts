import { MetrikaGoal } from "./types"

export function reachGoal(goal: MetrikaGoal) {
  const counterId = process.env.NEXT_PUBLIC_YM_COUNTER_ID

  if (!counterId) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Analytics] NEXT_PUBLIC_YM_COUNTER_ID не задан")
    }
    return
  }

  if (typeof window !== "undefined" && window.ym) {
    window.ym(Number(counterId), "reachGoal", goal)
  }
}
