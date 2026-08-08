import { FORM_PARAMS } from "./form"

export const getContactFormHref = (solutionSlug?: string) => {
  if (!solutionSlug) {
    return "#contact_form"
  }

  return `?${FORM_PARAMS.SOLUTION_TYPE}=${solutionSlug}`
}
