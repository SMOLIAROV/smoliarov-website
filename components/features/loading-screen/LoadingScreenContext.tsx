"use client"

import { createContext } from "react"

import { LoadingScreenContextValue } from "./types"

export const LoadingScreenContext =
  createContext<LoadingScreenContextValue | null>(null)
