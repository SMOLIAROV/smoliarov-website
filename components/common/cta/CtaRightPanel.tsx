import { CtaPrice } from "./CtaPrice"
import { DescribeBlackButton } from "@/components/common/Buttons/DescribeBlackButton"

export function CtaRightPanel({ solution_type }: { solution_type: string }) {
  return (
    <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
      <CtaPrice solution_type={solution_type} />
      <DescribeBlackButton />
    </div>
  )
}
