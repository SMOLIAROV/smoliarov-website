import { useI18nContext } from "./useI18nContext"
import { usePathname } from "next/navigation"

export function useLocaleSwitch() {
  const { otherLocale } = useI18nContext()
  let pathname = usePathname()

  if (pathname === "/") {
    pathname = "/ru"
  }

  const switchLocalePath = pathname.replace(/^\/[a-z]{2}/, `/${otherLocale}`)

  return {
    otherLocale,
    switchLocalePath,
  }
}
