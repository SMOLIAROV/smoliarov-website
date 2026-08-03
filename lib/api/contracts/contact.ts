export interface ContactSubmissionPayload {
  name: string
  email: string
  phone?: string
  project_type: string
  budget?: string
  message: string
  consent_privacy: boolean
  consent_offer: boolean
}

export interface ContactSubmissionResponse {
  id: string
}
