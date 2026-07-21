export type MetrikaGoal = string

declare global {
  export interface Window {
    ym?: (
      _counterId: number,
      _action: "reachGoal",
      _goalName: string,
      _params?: Record<string, any>
    ) => void
  }
}
