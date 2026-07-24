import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { i18n } from "./lib/i18n/config"

const locales = i18n.locales
const defaultLocale = i18n.defaultLocale

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const url = new URL(request.url)
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
}
