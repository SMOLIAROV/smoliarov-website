import { Metadata } from "next"
import { getMetadata } from "@/lib/metadata"
import { METADATA_PAGES } from "@/constants/metadata/metadata"
import { Locale } from "@/lib/i18n/config"
import ReviewsPage from "./ReviewsPage"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params

  return getMetadata(METADATA_PAGES.REVIEWS, locale)
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return <ReviewsPage locale={locale} />
}
