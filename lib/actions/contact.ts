"use server"

import { prisma } from "@/lib/prisma/prisma"
import { createContactFormSchema } from "@/lib/validation/contactForm"
import { headers } from "next/headers"
import { contactFormLimiter } from "../rate-limit"
import { Dictionary } from "../i18n/dictionaries"

export async function submitContactForm(data: unknown, dict: Dictionary) {
  const headersList = await headers()
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown"

  try {
    await contactFormLimiter.consume(ip)
  } catch {
    return {
      success: false,
      error: dict.contact_form.message.errors.rate_limit,
    }
  }

  const schema = createContactFormSchema(dict)
  const validated = schema.safeParse(data)

  if (!validated.success) {
    return {
      success: false,
      error: dict.contact_form.message.errors.invalid,
    }
  }

  try {
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validated.data.name,
        email: validated.data.email,
        phone: validated.data.phone || null,
        projectType: validated.data.project_type,
        budget: validated.data.budget || null,
        message: validated.data.message,
        consentPrivacy: validated.data.consent_privacy,
        consentOffer: validated.data.consent_offer,
      },
    })

    return {
      success: true,
      id: submission.id,
    }
  } catch (error) {
    console.error("Error creating contact submission:", error)
    return {
      success: false,
      error: dict.contact_form.message.errors.iternal,
    }
  }
}
