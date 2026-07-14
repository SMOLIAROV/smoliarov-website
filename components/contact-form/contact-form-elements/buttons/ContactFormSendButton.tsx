"use client"

import { useDict } from "@/lib/i18n/hooks/useDict";
import { Send } from "lucide-react";

export function ContactFormSendButton() {
    const dict = useDict()

    return (
        <button
          type="submit"
          className="group relative w-full h-11 md:h-12 bg-transparent border border-foreground/15 hover:border-foreground text-foreground rounded-xl overflow-hidden transition-all duration-300"
        >
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-background transition-colors duration-300 font-mono text-sm uppercase tracking-wide">
                {dict.contact_form.send}
                <Send className="w-4 h-4 transition-transform duration-300" />
            </span>
        </button>
    )
}