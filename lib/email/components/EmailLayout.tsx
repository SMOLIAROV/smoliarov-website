import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { EmailLayoutProps } from "./types"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html lang="ru">
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#111111",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#000000",
          }}
        >
          <Section
            style={{
              padding: "36px 48px 24px",
              borderBottom: "1px solid #1e1e18",
              textAlign: "center",
            }}
          >
            <Img
              src={`${baseUrl}/images/email/logo.png`}
              alt="SMOLIAROV"
              width="140"
              style={{
                display: "block",
                margin: "0 auto",
              }}
            />
          </Section>

          <Section
            style={{
              padding: "32px 48px 8px",
            }}
          >
            {children}
          </Section>

          <Section
            style={{
              padding: "22px 48px 28px",
            }}
          >
            <Text
              style={{
                color: "#c0bbb0",
                fontFamily: "'Courier Prime', 'Courier New', monospace",
                fontSize: "13px",
                lineHeight: "1.7",
                marginBottom: "2px",
              }}
            >
              С уважением, Денис Смоляров
            </Text>

            <Text
              style={{
                color: "#686860",
                fontFamily: "'Courier Prime', 'Courier New', monospace",
                fontSize: "11px",
                margin: 0,
              }}
            >
              Ведущий разработчик SMOLIAROV
            </Text>
          </Section>

          <Hr
            style={{
              borderColor: "#1e1e18",
            }}
          />

          <Section
            style={{
              padding: "18px 48px",
            }}
          >
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td>
                    <Text
                      style={{
                        color: "#686860",
                        fontFamily: "'Courier Prime', 'Courier New', monospace",
                        fontSize: "10px",
                        margin: 0,
                      }}
                    >
                      Надёжная основа для вашего бизнеса
                    </Text>
                  </td>

                  <td align="right">
                    <Text
                      style={{
                        color: "#686860",
                        fontFamily: "'Courier Prime', 'Courier New', monospace",
                        fontSize: "10px",
                        margin: 0,
                      }}
                    >
                      smoliarov.online
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Img
            src={`${baseUrl}/images/email/footer.webp`}
            width="600"
            alt=""
            style={{
              display: "block",
              width: "100%",
            }}
          />

          <Section
            style={{
              padding: "12px 48px 16px",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#383830",
                fontFamily: "'Courier Prime', 'Courier New', monospace",
                fontSize: "10px",
                margin: 0,
              }}
            >
              © 2026 Smoliarov Denis Nikolaevich. Все права защищены.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
