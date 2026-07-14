"use client"

import { Label } from "@/components/ui/label/Label";
import { Textarea } from "@/components/ui/textarea/Textarea";
import { useDict } from "@/lib/i18n/hooks/useDict";
import { MessageSquare } from "lucide-react";

export function ContactFormFieldMessage() {
    const dict = useDict()
    
    return (
        <div className="space-y-1.5">
            <Label htmlFor="message" className="flex items-center gap-1.5 text-xs">
                <MessageSquare className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
                {dict.contact_form.fields.message.label}
            </Label>

            <Textarea 
                id="message"
                placeholder={dict.contact_form.fields.message.placeholder}
                className="bg-background border resize-none rounded-xl min-h-[100px] md:min-h-[120px] transition-all duration-300 text-sm"
            />

            <div className="flex items-center justify-between">
                <span className="text-xs transition-colors">
                    0/10 {dict.common.min}
                </span>
            </div>
        </div>
    )
}