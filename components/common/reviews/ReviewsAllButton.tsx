"use client"

import { OutlineButton } from "@/components/ui/Buttons/OutlineButton"
import { ROUTES } from "@/constants/routes"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { useLocale } from "@/lib/i18n/hooks/useLocale"

export function ReviewsAllButton() {
  const dict = useDict()
  const locale = useLocale()

  return (
    <div className="mt-10 flex justify-center">
      <OutlineButton
        href={ROUTES.reviews(locale)}
        title={dict.reviews.all_reviews}
      />
    </div>
  )
}
