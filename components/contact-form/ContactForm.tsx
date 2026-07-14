import { ContactFormSendButton } from "./contact-form-elements/buttons/ContactFormSendButton";
import { ContactFormFields } from "./ContactFormFields";

export function ContactForm() {
    return (
        <div className="transition-all duration-1000 delay-200">
            <form className="space-y-4">
                <ContactFormFields />
                <ContactFormSendButton />
            </form>
        </div>
    )
}