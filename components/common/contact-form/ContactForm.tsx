"use client"

import { useContactForm } from "@/hooks/contact-form/useContactForm"
import { ContactFormSendButton } from "./contact-form-elements/buttons/ContactFormSendButton"
import { ContactFormFields } from "./ContactFormFields"
import { ContactFormMessage } from "./ContactFormMessage"

export function ContactForm({
  defaultSolutionType,
}: {
  defaultSolutionType?: string
}) {
  const {
    handleSubmit,
    control,
    register,
    errors,
    isSubmitting,
    status,
    errorMessage,
  } = useContactForm(defaultSolutionType)

  return (
    <div className="transition-all duration-1000 delay-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <ContactFormFields
          control={control}
          register={register}
          errors={errors}
        />

        <ContactFormSendButton disabled={isSubmitting} />

        <ContactFormMessage status={status} errorMessage={errorMessage} />
      </form>
    </div>
  )
}
