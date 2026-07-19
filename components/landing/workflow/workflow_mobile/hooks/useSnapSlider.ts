"use client"

import { useEffect, useRef, useState } from "react"

export function useSnapSlider(itemsCount: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>("[data-step]")
    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setActiveIndex(index)
          }
        })
      },
      {
        root: container,
        threshold: 0.35,
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [itemsCount])

  const scrollToIndex = (index: number) => {
    const container = containerRef.current
    if (!container) return

    const card = container.querySelector<HTMLElement>(`[data-index="${index}"]`)
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    }
  }

  return {
    containerRef,
    activeIndex,
    scrollToIndex,
  }
}
