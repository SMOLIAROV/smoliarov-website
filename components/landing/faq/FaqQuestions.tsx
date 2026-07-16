"use client"

import { faq } from "@/constants/faq/faq"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { FaqQuestion } from "./FaqQuestion"

export function FaqQuestions() {
  const dict = useDict()
  return (
    <div className="lg:col-span-8 space-y-3">
      {faq(dict).map((item, index) => (
        <FaqQuestion key={item.key} index={index} item={item} />
      ))}
    </div>
  )
}
