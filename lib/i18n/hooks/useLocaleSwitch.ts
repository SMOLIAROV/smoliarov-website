import { useI18nContext } from "./useI18nContext"
import { usePathname } from "next/navigation"

export function useLocaleSwitch() {
  const { otherLocale, switchLocalePath: baseSwitchLocalePath } =
    useI18nContext()
  const pathname = usePathname()

  const switchLocalePath = pathname.replace(/^\/[a-z]{2}/, `/${otherLocale}`)

  return { otherLocale, switchLocalePath }
}
