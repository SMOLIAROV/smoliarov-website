import { transporter } from "./transporter"

export async function sendMail({ to, subject, html }) {
  return transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
  })
}
