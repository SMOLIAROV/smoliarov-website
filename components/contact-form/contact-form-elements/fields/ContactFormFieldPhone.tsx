"use client"

import { Input } from "@/components/ui/input/Input"
import { Label } from "@/components/ui/label/Label"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { Phone } from "lucide-react"

export function ContactFormFieldPhone() {
    const dict = useDict()

    return (
        <div className="space-y-1.5">
            <Label htmlFor="phone" className="flex items-center gap-1.5 text-xs">
                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
                {dict.contact_form.fields.phone.label}
                <span className="text-muted-foreground text-[10px] md:text-xs">
                    ({dict.contact_form.optional})
                </span>
            </Label>
            
            <Input id="phone" placeholder={dict.contact_form.fields.phone.placeholder} />
        </div>       
    )
}