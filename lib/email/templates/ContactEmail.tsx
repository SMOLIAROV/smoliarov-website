import { EmailLayout } from "../components/EmailLayout"
import { EmailText } from "../components/EmailText"

export function ContactEmail() {
  return (
    <EmailLayout preview="Мы получили вашу заявку">
      <EmailText>Здравствуйте!</EmailText>

      <EmailText>
        Мы уже получили ваши данные и очень рады, что вы выбрали нас для
        сотрудничества.
      </EmailText>

      <EmailText color="#d4cfc4">Что дальше?</EmailText>

      <EmailText color="#d4cfc4">
        - Я внимательно изучу ваш запрос и свяжусь с вами в ближайшие 24 часа.
        <br />
        - Мы обсудим все детали, чтобы я точно понял, что вам нужно.
        <br />- После этого я пришлю финальное предложение по срокам и
        стоимости.
      </EmailText>

      <EmailText color="#d4cfc4">
        Если у вас есть что дополнить — смело отвечайте на это письмо, я всегда
        на связи.
      </EmailText>
    </EmailLayout>
  )
}
