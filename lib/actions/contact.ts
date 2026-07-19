"use server"

import { prisma } from "@/lib/prisma/prisma"
import { contactFormServerSchema } from "@/lib/validation/contactForm"
import { headers } from "next/headers"
import { contactFormLimiter } from "../rate-limit"
import { sendContactNotification } from "../telegram/sendContactNotification"
import { sendContactEmail } from "../email/services/sendContactEmail"

export async function submitContactForm(data: unknown) {
  const headersList = await headers()
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown"

  if (contactFormLimiter) {
    try {
      await contactFormLimiter.consume(ip)
    } catch {
      return {
        success: false,
        error: "rate_limit",
      }
    }
  }

  const schema = contactFormServerSchema
  const validated = schema.safeParse(data)

  if (!validated.success) {
    return {
      success: false,
      error: "invalid",
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

    void sendContactNotification({
      name: validated.data.name,
      email: validated.data.email,
      phone: validated.data.phone,
      projectType: validated.data.project_type,
      budget: validated.data.budget,
      message: validated.data.message,
    })

    await sendContactEmail(validated.data.email)

    return {
      success: true,
      id: submission.id,
    }
  } catch (error) {
    console.error("Error creating contact submission:", error)
    return {
      success: false,
      error: "iternal",
    }
  }
}
