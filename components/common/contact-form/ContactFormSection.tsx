import { ContactFormHeader } from "./ContactFormHeader"
import { ContactForm } from "./ContactForm"
import { SectionContainer } from "../SectionContainer"

export function ContactFormSection({
  defaultSolutionType,
}: {
  defaultSolutionType?: string
}) {
  return (
    <SectionContainer>
      <div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <ContactFormHeader />
          <ContactForm defaultSolutionType={defaultSolutionType} />
        </div>
      </div>
    </SectionContainer>
  )
}
