import { CtaHeadline } from "./CtaHeadline"
import { CtaLabel } from "./CtaLabel"

export function CtaLeftPanel() {
  return (
    <div className="min-w-0 max-w-lg">
      <CtaLabel />
      <CtaHeadline />
    </div>
  )
}
