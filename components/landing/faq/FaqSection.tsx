import { PageContainer } from "@/components/common/PageContainer";
import { FaqHeader } from "./FaqHeader";
import { FaqImage } from "./FaqImage";
import { FaqQuestions } from "./FaqQuestions";

export function FaqSection() {
    return (
        <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
            <PageContainer>
                <FaqHeader />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 **items-start**">
                    <FaqImage />
                    <FaqQuestions />
                </div>
            </PageContainer>
        </section>
    )
}