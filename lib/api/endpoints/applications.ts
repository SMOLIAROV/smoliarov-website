import { api } from "../client"
import {
  ContactSubmissionPayload,
  ContactSubmissionResponse,
} from "../contracts/contact"

export const createApplication = (body: ContactSubmissionPayload) => {
  const formData = new FormData()

  formData.append("name", body.name)
  formData.append("email", body.email)
  formData.append("project_type", body.project_type)
  formData.append("message", body.message)
  formData.append("consent_privacy", String(body.consent_privacy))
  formData.append("consent_offer", String(body.consent_offer))

  if (body.phone) formData.append("phone", body.phone)
  if (body.budget) formData.append("budget", body.budget)

  return api<ContactSubmissionResponse>("/api/v1/applications", {
    method: "POST",
    body: formData,
  })
}
