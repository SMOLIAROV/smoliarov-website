"use client"

import { PromoHeader } from "./PromoHeader"
import { PromoTimer } from "./PromoTimer"
import { PromoCTA } from "./PromoCTA"
import { PromoImage } from "./PromoImage"
import { PageContainer } from "@/components/common/PageContainer"
import { PROMO_DATES } from "@/constants/promo/promo"
import { useTimer } from "@/hooks/timer/useTimer"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { FORM_PARAMS } from "@/constants/form/form"
import { useContactFormNavigation } from "@/hooks/contact-form/useContactFormNavigation"

export function PromoSection() {
    const { isExpired } = useTimer(PROMO_DATES.free_domain_and_hosting);

    const searchParams = useSearchParams();
    const project = searchParams.get(FORM_PARAMS.PROJECT_TYPE);

    const { scrollToForm } = useContactFormNavigation();

    useEffect(() => {
        if (!project) return;

        scrollToForm();
    }, [project, scrollToForm]);

    if (isExpired) {
        return null;
    }
    
    return (
        <section className="relative py-12 md:py-16 lg:py-24 bg-black overflow-hidden">
            <PageContainer>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-stretch">
                    <div className="space-y-6 pt-2">
                        <PromoHeader />
                        <PromoTimer />
                        <PromoCTA />
                    </div>

                    <PromoImage />
                </div>
             </PageContainer>
        </section>
    )
}