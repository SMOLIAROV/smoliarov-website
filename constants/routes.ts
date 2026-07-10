export const ROUTES = {
  home: (locale: string) => `/${locale}`,
  legal: (locale: string, slug: string) => `/${locale}/legal/${slug}`,
} as const
