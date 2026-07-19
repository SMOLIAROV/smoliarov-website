import { render } from "@react-email/render"

import { ContactEmail } from "../templates/ContactEmail"

import { sendMail } from "../sendMail"

export async function sendContactEmail(email: string, name: string) {
  const html = await render(<ContactEmail name={name} />)

  await sendMail({
    to: email,
    subject: "Мы получили вашу заявку",
    html,
  })
}
