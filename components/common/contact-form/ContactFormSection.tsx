import { NAVIGATION } from "@/constants/navigation/navigation"
import { ContactFormHeader } from "./ContactFormHeader"
import { ContactForm } from "./ContactForm"
import { PageContainer } from "../PageContainer"

export function ContactFormSection() {
  return (
    <section className="relative py-16 md:py-32 lg:py-40">
      <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <PageContainer>
        <div id={NAVIGATION.CONTACT_FORM}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            <ContactFormHeader />
            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
