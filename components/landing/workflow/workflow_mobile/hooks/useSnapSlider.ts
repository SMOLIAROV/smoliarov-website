"use client"

import React, { useCallback, useLayoutEffect, useRef, useState } from "react"

const SLIDE_GAP = 12
const SWIPE_THRESHOLD = 50

export function useSnapSlider(itemsCount: number) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [offset, setOffset] = useState(0)

  const startXRef = useRef(0)
  const isDraggingRef = useRef(false)

  const updatePosition = useCallback((index: number) => {
    const container = containerRef.current

    if (!container) return

    const card = container.querySelector<HTMLElement>(`[data-index="${index}"]`)

    if (!card) return

    const containerCenter = container.clientWidth / 2
    const cardCenter = card.offsetWidth / 2

    const nextOffset =
      containerCenter - cardCenter - index * (card.offsetWidth + SLIDE_GAP)

    setOffset(nextOffset)
  }, [])

  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return

    const update = () => {
      updatePosition(activeIndex)
    }

    update()

    const resizeObserver = new ResizeObserver(update)

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [activeIndex, itemsCount, updatePosition])

  const goToIndex = useCallback(
    (index: number) => {
      if (!itemsCount) return

      const nextIndex = ((index % itemsCount) + itemsCount) % itemsCount

      setActiveIndex(nextIndex)
      updatePosition(nextIndex)
    },
    [itemsCount, updatePosition]
  )

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      startXRef.current = event.clientX
      isDraggingRef.current = true
    },
    []
  )

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return

      isDraggingRef.current = false

      const deltaX = event.clientX - startXRef.current

      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return

      goToIndex(deltaX < 0 ? activeIndex + 1 : activeIndex - 1)
    },
    [activeIndex, goToIndex]
  )

  const handlePointerCancel = useCallback(() => {
    isDraggingRef.current = false
  }, [])

  return {
    containerRef,
    activeIndex,
    offset,
    goToIndex,
    handlePointerDown,
    handlePointerUp,
    handlePointerCancel,
  }
}
