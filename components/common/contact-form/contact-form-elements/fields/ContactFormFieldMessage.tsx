"use client"

import { Label } from "@/components/ui/label/Label"
import { Textarea } from "@/components/ui/textarea/Textarea"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { MessageSquare } from "lucide-react"
import { FieldControlProps } from "./types"
import { Controller } from "react-hook-form"

export function ContactFormFieldMessage({ control, error }: FieldControlProps) {
  const dict = useDict()

  return (
    <div className="space-y-1.5">
      <Label htmlFor="message" className="flex items-center gap-1.5 text-xs">
        <MessageSquare className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
        {dict.contact_form.fields.message.label}
      </Label>

      <Controller
        name="message"
        control={control}
        render={({ field }) => {
          const value = field.value || ""
          const length = value.length
          const isTooShort = length > 0 && length < 10
          const isTooLong = length > 1000

          return (
            <>
              <Textarea
                id="message"
                placeholder={dict.contact_form.fields.message.placeholder}
                maxLength={1000}
                className={`bg-background border resize-none rounded-xl min-h-[100px] md:min-h-[120px] transition-all duration-300 text-sm ${
                  error || isTooShort || isTooLong
                    ? "border-destructive focus-visible:ring-destructive"
                    : ""
                }`}
                {...field}
              />

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs transition-colors ${
                    isTooShort || isTooLong || error
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                >
                  {length} / 1000
                </span>
              </div>
            </>
          )
        }}
      />

      {error && (
        <p className="text-[13px] text-destructive mt-0.5">{error.message}</p>
      )}
    </div>
  )
}
