"use client"

import { useContext } from "react"

import { ERRORS } from "@/lib/errors"

import { LoadingScreenContext } from "../LoadingScreenContext"

export function useLoadingScreen() {
  const context = useContext(LoadingScreenContext)

  if (!context) {
    throw new Error(ERRORS.LOADING_SCREEN.CONTEXT)
  }

  return context
}

export function useLoadingScreenHidden() {
  return useLoadingScreen().isHidden
}
