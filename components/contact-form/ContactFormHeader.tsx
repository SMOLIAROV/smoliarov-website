"use client"

import { useDict } from "@/lib/i18n/hooks/useDict"
import Image from "next/image"
import WhaleImage from "@/public/images/whale.webp"

export function ContactFormHeader(){
    const dict = useDict()

    return (
        <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-muted-foreground mb-3 md:mb-6">
                <span className="w-6 md:w-12 h-px bg-foreground/30" />
                {dict.contact_form.subtitle}
            </span>

            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1] mb-3 md:mb-6 transition-all duration-1000 text-balance">
                {dict.contact_form.title}
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed transition-all duration-1000 delay-100 mb-6 md:mb-8">
                {dict.contact_form.description}
            </p>

            <div className="relative hidden lg:block mt-4 transition-all duration-1000 delay-200">
                <div className="relative w-full aspect-[4/3] max-w-[520px] rounded-xl overflow-hidden">
                    <Image
                        src={WhaleImage}
                        alt="Digital whale"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain object-center"
                    />
                </div>
            </div>
        </div>
    )
}