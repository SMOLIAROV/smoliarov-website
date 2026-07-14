
import { ContactFormFieldBudget } from "./contact-form-elements/fields/ContactFormFieldBudget";
import { ContactFormFieldConsentOffer } from "./contact-form-elements/fields/ContactFormFieldConsentOffer";
import { ContactFormFieldConsentPrivacy } from "./contact-form-elements/fields/ContactFormFieldConsentPrivacy";
import { ContactFormFieldEmail } from "./contact-form-elements/fields/ContactFormFieldEmail";
import { ContactFormFieldMessage } from "./contact-form-elements/fields/ContactFormFieldMessage";
import { ContactFormFieldName } from "./contact-form-elements/fields/ContactFormFieldName";
import { ContactFormFieldPhone } from "./contact-form-elements/fields/ContactFormFieldPhone";
import { ContactFormFieldProject } from "./contact-form-elements/fields/ContactFormFieldProject";

export function ContactFormFields() {
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactFormFieldName />
                <ContactFormFieldEmail />
            </div>

            <ContactFormFieldPhone />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactFormFieldProject />
                <ContactFormFieldBudget />
            </div>

            <ContactFormFieldMessage />

            <ContactFormFieldConsentPrivacy />
            <ContactFormFieldConsentOffer />
        </>
    )
}