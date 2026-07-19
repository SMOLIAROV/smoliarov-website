type ContactData = {
  name: string
  email: string
  phone?: string | null
  projectType: string
  budget?: string | null
  message: string
}

export async function sendContactNotification(data: ContactData) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn("Telegram credentials are missing")
    return
  }

  const text = `
    📬 <b>НОВАЯ ЗАЯВКА!</b>

👤 <b>Имя:</b> ${escapeHtml(data.name)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
${data.phone ? `📱 <b>Телефон:</b> ${escapeHtml(data.phone)}` : ""}

📁 <b>Тип проекта:</b> ${escapeHtml(data.projectType)}
${data.budget ? `💰 <b>Бюджет:</b> ${escapeHtml(data.budget)}` : ""}

💬 <b>Сообщение:</b>
${escapeHtml(data.message)}
  `.trim()

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    )

    if (!res.ok) {
      console.error("Telegram API error:", await res.text())
    }
  } catch (error) {
    console.error("Failed to send Telegram notification:", error)
  }
}

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}
