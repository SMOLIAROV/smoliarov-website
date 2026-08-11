import { Solution } from "@/constants/solution/types"
import { CtaPrice } from "./CtaPrice"
import { DescribeBlackButton } from "@/components/common/Buttons/DescribeBlackButton"

export function CtaRightPanel({ solution }: { solution?: Solution }) {
  return (
    <div
      className="
        flex
        shrink-0
        flex-col
        items-start
        gap-5

        md:items-end
        md:text-right
      "
    >
      <CtaPrice
        title={solution?.content.title}
        solutionPackages={solution?.pricing}
      />

      <DescribeBlackButton />
    </div>
  )
}
