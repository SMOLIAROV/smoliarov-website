import { render } from "@react-email/render"

import { ContactEmail } from "../templates/ContactEmail"

import { sendMail } from "../sendMail"
import React from "react"

export async function sendContactEmail(email: string) {
  const html = await render(React.createElement(ContactEmail))

  await sendMail({
    to: email,
    subject: "Мы получили вашу заявку",
    html,
  })
}
