"use client"

import { Label } from "@/components/ui/label/Label"
import { Select } from "@/components/ui/select/Select"
import { SelectContent } from "@/components/ui/select/SelectContent"
import { SelectItem } from "@/components/ui/select/SelectItem"
import { SelectTrigger } from "@/components/ui/select/SelectTrigger"
import { SelectValue } from "@/components/ui/select/SelectValue"
import { budgets } from "@/constants/budget/budget"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { Wallet } from "lucide-react"

export function ContactFormFieldBudget() {
  const dict = useDict()

  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5 text-xs md:text-sm">
        <Wallet className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
        {dict.contact_form.fields.budget.label}
        <span className="text-muted-foreground text-[10px] md:text-xs">
          ({dict.contact_form.optional})
        </span>
      </Label>

      <Select>
        <SelectTrigger>
          <SelectValue
            placeholder={dict.contact_form.fields.budget.placeholder}
          />
        </SelectTrigger>

        <SelectContent>
          {budgets(dict).map(({ slug, label }) => (
            <SelectItem key={slug} value={slug}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
