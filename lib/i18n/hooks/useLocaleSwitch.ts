import { useI18nContext } from "./useI18nContext"

export function useLocaleSwitch() {
  const { otherLocale, switchLocalePath } = useI18nContext()
  return { otherLocale, switchLocalePath }
}
