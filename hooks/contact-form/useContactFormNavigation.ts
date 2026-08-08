"use client"

import React, { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { FORM_PARAMS } from "@/constants/form/form"
import { NAVIGATION } from "@/constants/navigation/navigation"

export function useContactFormNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const scrollToForm = useCallback(() => {
    document.getElementById(NAVIGATION.CONTACT_FORM)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [])

  const navigateToSolution = useCallback(
    (solution: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(FORM_PARAMS.SOLUTION_TYPE, solution)

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      })
    },
    [pathname, router, searchParams]
  )

  const handleLinkClick = useCallback(
    (solution: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      const currentSolution = searchParams.get(FORM_PARAMS.SOLUTION_TYPE)

      if (currentSolution === solution) {
        e.preventDefault()
        scrollToForm()
      }
    },
    [scrollToForm, searchParams]
  )

  return {
    scrollToForm,
    navigateToSolution: navigateToSolution,
    handleLinkClick,
  }
}
