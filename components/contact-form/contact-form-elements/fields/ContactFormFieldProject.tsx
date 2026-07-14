"use client"

import { Label } from "@/components/ui/label/Label"
import { Select } from "@/components/ui/select/Select"
import { SelectContent } from "@/components/ui/select/SelectContent"
import { SelectItem } from "@/components/ui/select/SelectItem"
import { SelectTrigger } from "@/components/ui/select/SelectTrigger"
import { SelectValue } from "@/components/ui/select/SelectValue"
import { projects } from "@/constants/project/projects"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { Briefcase } from "lucide-react"

export function ContactFormFieldProject() {
    const dict = useDict()
    
    return (
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5 text-xs md:text-sm">
            <Briefcase className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
            {dict.contact_form.fields.project_type.label}
          </Label>

          <Select>
            <SelectTrigger>
                <SelectValue placeholder={dict.contact_form.fields.project_type.placeholder} />
            </SelectTrigger>
            
            <SelectContent>
              {projects(dict).map(({slug, label}) => (
                <SelectItem key={slug} value={slug}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
    )
}