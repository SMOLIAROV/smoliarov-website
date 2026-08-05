import { HeroMainHeadline } from "@/components/common/Hero/HeroMainHeadline"
import { PageContainer } from "@/components/common/PageContainer"
import { HeroGridLines } from "@/components/landing/hero/HeroGridLines"
import { HeroCTA } from "./cta/HeroCTA"
import { HeroImage } from "./image/HeroImage"
import { HeroImageBadge } from "./image/HeroImageBadge"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      <HeroGridLines />

      <PageContainer>
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-28 lg:py-36">
          <div className="mb-6 md:mb-8">
            <HeroMainHeadline
              title="Разработка сайта"
              subtitle="Создаём современные сайты: лендинги, корпоративные сайты, каталоги. Привлекают клиентов, отражают ваш бренд и продают."
            />

            <HeroCTA />
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <HeroImage />
            <HeroImageBadge />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
