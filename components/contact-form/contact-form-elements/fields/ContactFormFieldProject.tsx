"use client"

import { Label } from "@/components/ui/label/Label"
import { Select } from "@/components/ui/select/Select"
import { SelectContent } from "@/components/ui/select/SelectContent"
import { SelectItem } from "@/components/ui/select/SelectItem"
import { SelectTrigger } from "@/components/ui/select/SelectTrigger"
import { SelectValue } from "@/components/ui/select/SelectValue"
import { FORM_PARAMS } from "@/constants/form/form"
import { projects } from "@/constants/project/projects"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { Briefcase } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Controller } from "react-hook-form"
import { FieldControlProps } from "./types"
import { PromoNotice } from "../notice/PromoNotice"
import { getPromo } from "@/constants/promo/promo.data"

export function ContactFormFieldProject({ control, error }: FieldControlProps) {
  const dict = useDict()
  const promotions = getPromo(dict)
  const projectFromUrl = useSearchParams().get(FORM_PARAMS.PROJECT_TYPE)
  const urlValue = projects(dict).some((p) => p.slug === projectFromUrl)
    ? projectFromUrl
    : ""

  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5 text-xs md:text-sm">
        <Briefcase className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
        {dict.contact_form.fields.project_type.label}
      </Label>

      <Controller
        name="project_type"
        control={control}
        render={({ field }) => {
          if (urlValue && !field.value) {
            field.onChange(urlValue)
          }

          const promo = field.value
            ? Object.values(promotions).find(
                (p) => p.project_type === field.value
              )
            : null

          return (
            <>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className={
                    error ? "border-destructive focus:ring-destructive" : ""
                  }
                >
                  <SelectValue
                    placeholder={
                      dict.contact_form.fields.project_type.placeholder
                    }
                  />
                </SelectTrigger>

                <SelectContent>
                  {projects(dict).map(({ slug, label }) => (
                    <SelectItem key={slug} value={slug}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {error && (
                <p className="text-[13px] text-destructive mt-0.5">
                  {error.message}
                </p>
              )}

              {promo && <PromoNotice promo={promo} />}
            </>
          )
        }}
      />
    </div>
  )
}
