import { Solution } from "@/constants/solution/types"
import { CtaPrice } from "./CtaPrice"
import { DescribeBlackButton } from "@/components/common/Buttons/DescribeBlackButton"

export function CtaRightPanel({ solution }: { solution?: Solution }) {
  return (
    <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
      <CtaPrice
        title={solution?.content.title}
        solutionPackages={solution?.pricing}
      />
      <DescribeBlackButton />
    </div>
  )
}
