import { Dictionary } from "@/lib/i18n/dictionaries";

export const faq = (dict: Dictionary) => [
    {
        "key": "timeline",
        "question": dict.faq.items.timeline.question,
        "answer": dict.faq.items.timeline.answer
    },
    {
        "key": "payment",
        "question": dict.faq.items.payment.question,
        "answer": dict.faq.items.payment.answer
    },
    {
        "key": "tech",
        "question": dict.faq.items.tech.question,
        "answer": dict.faq.items.tech.answer
    },
    {
        "key": "communication", 
        "question": dict.faq.items.communication.question,
        "answer": dict.faq.items.communication.answer
    },
    {
        "key": "support_after",
        "question": dict.faq.items.support_after.question,
        "answer": dict.faq.items.support_after.answer
    },
    {
        "key": "confidentiality",
        "question": dict.faq.items.confidentiality.question,
        "answer": dict.faq.items.confidentiality.answer
    }
]