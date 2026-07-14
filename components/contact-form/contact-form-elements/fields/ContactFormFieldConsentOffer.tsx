"use client"

import { Checkbox } from "@/components/ui/checkbox/Checkbox";
import { Label } from "@/components/ui/label/Label"
import { LEGAL_SLUGS } from "@/constants/legal/legal";
import { ROUTES } from "@/constants/routes";
import { useDict } from "@/lib/i18n/hooks/useDict";
import { useLocale } from "@/lib/i18n/hooks/useLocale";
import Link from "next/link";

export function ContactFormFieldConsentOffer() {
    const dict = useDict()
    const locale = useLocale()

    return (
        <div className="space-y-1.5">
            <div className="flex items-start gap-3">
                <Checkbox
                    id="consent_offer"
                    className="mt-0.5"
                />

                <Label
                    htmlFor="consent_offer"
                    className="text-xs md:text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                    {dict.common.consent.i_accept_terms}
                    {" "}
                    <Link
                        href={ROUTES.legal(locale, LEGAL_SLUGS.OFFER)}
                        className="text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors"
                    >
                        {dict.common.consent.offer}
                    </Link>
                </Label>
            </div>
        </div>
    )
}