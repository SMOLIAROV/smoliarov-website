import { ApiError, ApiErrorBody } from "./errors"
import { ApiOptions } from "./types"

const API = process.env.API_URL!

export async function api<T = any>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const isFormData = options.body instanceof FormData

  const res = await fetch(`${API}${endpoint}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  })

  if (!res.ok) {
    let body: ApiErrorBody | null = null

    try {
      body = await res.json()
    } catch {
      // ignore
    }

    if (body?.error) {
      throw new ApiError(body)
    }

    throw new Error(`${res.statusText}`)
  }

  if (res.status === 204) return null as T
  return res.json()
}
