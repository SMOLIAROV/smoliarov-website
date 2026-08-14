import SolutionPage from "./SolutionPage"
import { Locale } from "@/lib/i18n/config"
import { Metadata } from "next"
import { getMetadata } from "@/lib/metadata"
import { isSolutionType } from "@/constants/solution/solution.data"
import { notFound } from "next/navigation"
import { getSolutionPackages } from "@/lib/api/endpoints/solutions"

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
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isSolutionType(slug)) {
    return notFound()
  }

  const solutionPackages = await getSolutionPackages({
    locale,
    solutionTypes: slug,
  })

  return (
    <SolutionPage
      locale={locale}
      slug={slug}
      solutionPackages={solutionPackages}
    />
  )
}
