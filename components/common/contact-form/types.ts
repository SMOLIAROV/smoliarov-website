import { createFormSchema } from "@/constants/form/form"
import * as z from "zod"

export type ContactFormValues = z.infer<ReturnType<typeof createFormSchema>>
