"use client"

import { Input } from "@/components/ui/input/Input"
import { Label } from "@/components/ui/label/Label"
import { useDict } from "@/lib/i18n/hooks/useDict"
import { Mail } from "lucide-react"

export function ContactFormFieldEmail(){
    const dict = useDict()
    
    return (
        <div className="space-y-1.5">
            <Label htmlFor="email" className="flex items-center gap-1.5 text-xs">
                <Mail className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
                {dict.contact_form.fields.email.label}
            </Label>
            
            <Input id="email" placeholder={dict.contact_form.fields.email.placeholder} />
        </div>
    )
}