import { Text } from "@react-email/components"
import { EmailTextProps } from "./types"

export function EmailText({ children, color = "#c0bbb0" }: EmailTextProps) {
  return (
    <Text
      style={{
        fontFamily: "'Courier Prime', 'Courier New', monospace",
        fontSize: "14px",
        lineHeight: "1.9",
        color,
        margin: "0 0 18px",
      }}
    >
      {children}
    </Text>
  )
}
