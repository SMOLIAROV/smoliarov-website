import { FieldError, UseFormRegister } from "react-hook-form"
import { ContactFormValues } from "../../types"

export interface FieldRegisterProps {
  register: UseFormRegister<ContactFormValues>
  error?: FieldError
}

export interface FieldControlProps {
  control: any
  error?: FieldError
}
