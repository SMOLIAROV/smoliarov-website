import { Control, FieldErrors, UseFormRegister } from "react-hook-form"
import { ContactFormFieldBudget } from "./contact-form-elements/fields/ContactFormFieldBudget"
import { ContactFormFieldConsentOffer } from "./contact-form-elements/fields/ContactFormFieldConsentOffer"
import { ContactFormFieldConsentPrivacy } from "./contact-form-elements/fields/ContactFormFieldConsentPrivacy"
import { ContactFormFieldEmail } from "./contact-form-elements/fields/ContactFormFieldEmail"
import { ContactFormFieldMessage } from "./contact-form-elements/fields/ContactFormFieldMessage"
import { ContactFormFieldName } from "./contact-form-elements/fields/ContactFormFieldName"
import { ContactFormFieldPhone } from "./contact-form-elements/fields/ContactFormFieldPhone"
import { ContactFormFieldProject } from "./contact-form-elements/fields/ContactFormFieldProject"
import { ContactFormValues } from "./types"

interface Props {
  control: Control<ContactFormValues>
  register: UseFormRegister<ContactFormValues>
  errors: FieldErrors<ContactFormValues>
}

export function ContactFormFields({ control, register, errors }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ContactFormFieldName register={register} error={errors.name} />
        <ContactFormFieldEmail register={register} error={errors.email} />
      </div>

      <ContactFormFieldPhone register={register} error={errors.phone} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ContactFormFieldProject
          control={control}
          error={errors.project_type}
        />
        <ContactFormFieldBudget control={control} />
      </div>

      <ContactFormFieldMessage control={control} error={errors.message} />

      <ContactFormFieldConsentPrivacy
        control={control}
        error={errors.consent_privacy}
      />
      <ContactFormFieldConsentOffer
        control={control}
        error={errors.consent_offer}
      />
    </>
  )
}
