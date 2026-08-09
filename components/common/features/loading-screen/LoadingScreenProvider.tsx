import { LoadingScreenContext } from "./LoadingScreenContext"

import { LoadingScreenProviderProps } from "./types"

export function LoadingScreenProvider({
  value,
  children,
}: LoadingScreenProviderProps) {
  return (
    <LoadingScreenContext.Provider value={value}>
      {children}
    </LoadingScreenContext.Provider>
  )
}
