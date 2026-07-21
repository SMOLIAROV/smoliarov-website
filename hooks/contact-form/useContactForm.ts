"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDict } from "@/lib/i18n/hooks/useDict"
import {
  createContactFormSchema,
  type ContactFormValues,
} from "@/lib/validation/contactForm"
import { submitContactForm } from "@/lib/actions/contact"
import { contactFormGoal } from "@/lib/yandex-metrics-goals/contact_form"

type SubmitStatus = "idle" | "success" | "error"

export function useContactForm() {
  const dict = useDict()
  const formSchema = createContactFormSchema(dict)

  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      project_type: "",
      budget: "",
      message: "",
      consent_privacy: false,
      consent_offer: false,
    },
    mode: "onTouched",
  })

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = form

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle")
    setErrorMessage(null)

    const result = await submitContactForm(data)

    if (!result.success) {
      setStatus("error")

      const errorKey =
        result.error as keyof typeof dict.contact_form.message.errors
      setErrorMessage(
        dict.contact_form.message.errors[errorKey] ||
          dict.contact_form.message.errors.iternal
      )
      return
    }

    setStatus("success")
    contactFormGoal()

    reset(
      {
        name: "",
        email: "",
        phone: "",
        project_type: "",
        budget: "",
        message: "",
        consent_privacy: false,
        consent_offer: false,
      },
      {
        keepErrors: false,
        keepDirty: false,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    )
  }

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    register,
    errors,
    isSubmitting,
    status,
    errorMessage,
  }
}
