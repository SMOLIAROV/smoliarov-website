import { EmailLayout } from "../components/EmailLayout"
import { EmailText } from "../components/EmailText"

interface ContactEmailProps {
  name: string
}

export function ContactEmail({ name }: ContactEmailProps) {
  return (
    <EmailLayout preview="Мы получили вашу заявку">
      <EmailText>Здравствуйте, {name}!</EmailText>

      <EmailText>
        Мы уже получили ваши данные и очень рады, что вы выбрали нас для
        сотрудничества.
      </EmailText>

      <EmailText color="#d4cfc4">Что дальше?</EmailText>

      <EmailText color="#d4cfc4">
        - Мы внимательно изучим ваш запрос и свяжемся с вами в ближайшие 24
        часа.
        <br />
        - Мы обсудим все детали, чтобы мы точно поняли, что вам нужно.
        <br />- После этого мы пришлем финальное предложение по срокам и
        стоимости.
      </EmailText>

      <EmailText color="#d4cfc4">
        Если у вас есть что дополнить — смело отвечайте на это письмо, мы всегда
        на связи.
      </EmailText>
    </EmailLayout>
  )
}
