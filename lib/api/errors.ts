export type ApiErrorDetail = {
  obj: string
  reason: string
  detail?: {
    detected?: string
    expected?: string | null
  }
}

export type ApiErrorBody = {
  error: {
    code: string
    message: string
    details?: ApiErrorDetail[]
  }
}

export class ApiError extends Error {
  code: string
  details: ApiErrorDetail[]

  constructor(body: ApiErrorBody) {
    super(body.error.message)
    this.code = body.error.code
    this.details = body.error.details ?? []
  }
}

export function getFieldError(error: ApiError, field: string) {
  return error.details.find((d) => d.obj === field)?.reason ?? null
}
