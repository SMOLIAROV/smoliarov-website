"use client"

import { ChevronDown } from "lucide-react"
import { FaqItemProps } from "./types"
import { cn } from "@/lib/utils/cn"
import { useState } from "react"

export function FaqQuestion({ index, item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="transition-all duration-100 lg:faq-stair">
      <div className="group relative overflow-hidden border border-foreground/15 bg-card/30 backdrop-blur-sm rounded-xl transition-all duration-100">
        <button
          type="button"
          className="w-full p-4 md:p-5 text-left flex items-center gap-3 md:gap-4 cursor-pointer"
          onClick={toggleOpen}
        >
          <div className="shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-foreground/15 rounded-lg transition-all duration-100">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm md:text-base font-display leading-snug pr-2">
                {item.question}
              </h3>

              <div
                className={cn(
                  "shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-foreground/10 transition-all duration-100",
                  isOpen && "rotate-180"
                )}
              >
                <ChevronDown className="w-3.5 h-3.5 text-foreground/50" />
              </div>
            </div>
          </div>
        </button>

        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-100 ease-out",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden min-h-0">
            <div className="px-4 md:px-5 pb-4 md:pb-5 md:pl-[4.8rem]">
              <div className="pt-3 border-t border-foreground/10">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
