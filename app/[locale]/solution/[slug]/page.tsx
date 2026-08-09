import SolutionPage from "./SolutionPage"
import { Locale } from "@/lib/i18n/config"
import { Metadata } from "next"
import { getMetadata } from "@/lib/metadata"
import { isSolutionType } from "@/constants/solution/solution.data"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isSolutionType(slug)) {
    return notFound()
  }

  return getMetadata(`solution/${slug}`, locale)
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!isSolutionType(slug)) {
    return notFound()
  }

  return <SolutionPage slug={slug} />
}
