import { FORM_PARAMS } from "./form"

export const getContactFormHref = (projectSlug?: string) => {
  if (!projectSlug) {
    return "#contact_form"
  }

  return `?${FORM_PARAMS.PROJECT_TYPE}=${projectSlug}`
}