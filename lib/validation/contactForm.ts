import { z } from "zod"
import { PROJECT_TYPE_VALUES } from "@/constants/project/projects"
import { Dictionary } from "../i18n/dictionaries"

export const createContactFormSchema = (dict: Dictionary) => {
  const messages = {
    nameRequired: dict.contact_form.fields.name.errors.required,
    nameLetters: dict.contact_form.fields.name.errors.invalid,
    email: dict.contact_form.fields.email.errors.invalid,
    phone: dict.contact_form.fields.phone.errors.invalid,
    projectRequired: dict.contact_form.fields.project_type.errors.required,
    projectInvalid: dict.contact_form.fields.project_type.errors.invalid,
    messageMin: dict.contact_form.fields.message.errors.min,
    messageMax: dict.contact_form.fields.message.errors.max,
    consentPrivacy: dict.contact_form.fields.consent_privacy.errors.required,
    consentOffer: dict.contact_form.fields.consent_offer.errors.required,
  }

  return z.object({
    name: z
      .string()
      .min(2, messages.nameRequired)
      .regex(/^[a-zA-Zа-яА-ЯёЁіІўЎ\s'-]+$/, messages.nameLetters),

    email: z.string().email(messages.email),

    phone: z
      .string()
      .optional()
      .or(z.literal(""))
      .refine(
        (value) => {
          if (!value || value.trim() === "") return true
          return /^\+?375\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(value)
        },
        { message: messages.phone }
      ),

    project_type: z
      .string()
      .min(1, messages.projectRequired)
      .refine((value) => (PROJECT_TYPE_VALUES as string[]).includes(value), {
        message: messages.projectInvalid,
      }),

    budget: z.string().optional().or(z.literal("")),

    message: z
      .string()
      .max(1000, messages.messageMax)
      .refine(
        (value) => {
          const lengthWithoutSpaces = value.replace(/\s/g, "").length
          return lengthWithoutSpaces >= 10
        },
        {
          message: messages.messageMin,
        }
      ),

    consent_privacy: z.boolean().refine((val) => val === true, {
      message: messages.consentPrivacy,
    }),

    consent_offer: z.boolean().refine((val) => val === true, {
      message: messages.consentOffer,
    }),
  })
}

export const contactFormServerSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-zA-Zа-яА-ЯёЁіІўЎ\s'-]+$/),

  email: z.string().email().max(255),

  phone: z
    .string()
    .max(30)
    .optional()
    .or(z.literal(""))
    .refine((value) => {
      if (!value || value.trim() === "") return true
      return /^\+?375\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(value)
    }),

  project_type: z
    .string()
    .min(1)
    .refine((value) => (PROJECT_TYPE_VALUES as string[]).includes(value)),

  budget: z.string().max(50).optional().or(z.literal("")),

  message: z
    .string()
    .max(1000)
    .refine((value) => {
      const lengthWithoutSpaces = value.replace(/\s/g, "").length
      return lengthWithoutSpaces >= 10
    }),

  consent_privacy: z.literal(true),
  consent_offer: z.literal(true),
})

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactFormSchema>
>
