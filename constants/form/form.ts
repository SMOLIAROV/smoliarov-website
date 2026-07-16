import * as z from "zod"

export const FORM_PARAMS = {
  PROJECT_TYPE: "project",
  BUDGET_TYPE: "budget",
} as const

export const createFormSchema = (dict: any) =>
  z.object({
    name: z
      .string()
      .min(
        2,
        dict.contact_form?.validation?.name ||
          "Пожалуйста, введите ваше имя (минимум 2 символа)"
      ),
    email: z
      .string()
      .email(
        dict.contact_form?.validation?.email ||
          "Введите корректный адрес электронной почты"
      ),
    phone: z.string().optional().or(z.literal("")),
    project_type: z
      .string()
      .min(
        1,
        dict.contact_form?.validation?.project_type ||
          "Пожалуйста, выберите тип проекта"
      ),
    budget: z.string().optional().or(z.literal("")),
    message: z
      .string()
      .min(
        10,
        dict.contact_form?.validation?.message ||
          "Сообщение должно содержать минимум 10 символов"
      ),
    consent_privacy: z.boolean().refine((val) => val === true, {
      message:
        dict.contact_form?.validation?.consent_privacy ||
        "Необходимо согласиться с политикой конфиденциальности",
    }),
    consent_offer: z.boolean().refine((val) => val === true, {
      message:
        dict.contact_form?.validation?.consent_offer ||
        "Необходимо принять условия публичной оферты",
    }),
  })
