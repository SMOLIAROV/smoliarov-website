"use server"

import { contactFormServerSchema } from "@/lib/validation/contactForm"
import { ApiError, createApplication } from "../api"

export async function submitContactForm(data: unknown) {
  const validated = contactFormServerSchema.safeParse(data)

  if (!validated.success) {
    return {
      success: false,
      error: "invalid",
    }
  }

  try {
    const { id } = await createApplication({
      name: validated.data.name,
      email: validated.data.email,
      phone: validated.data.phone || undefined,
      solution_type: validated.data.solution_type,
      budget: validated.data.budget || undefined,
      message: validated.data.message,
      consent_privacy: validated.data.consent_privacy,
      consent_offer: validated.data.consent_offer,
    })

    return {
      success: true,
      id: id,
    }
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.code,
      }
    }
  }
}
