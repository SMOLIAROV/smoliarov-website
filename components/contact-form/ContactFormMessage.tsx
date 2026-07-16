"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import { CheckCircle } from "lucide-react"

export function ContactFormMessage({
  status,
  errorMessage,
}: {
  status: string
  errorMessage: string
}) {
  const dict = useDict()

  return (
    <>
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <div className="w-10 h-10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>

          <div>
            <p className="text-green-500 font-medium">
              {dict.contact_form.message.success.request_created}
            </p>
            <p className="text-green-500/70 text-sm">
              {dict.contact_form.message.success.confirmation_sent}
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl">
          {errorMessage || dict.contact_form.message.errors.iternal}
        </div>
      )}
    </>
  )
}
