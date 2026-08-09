import { DescribeWhiteButton } from "@/components/common/Buttons/DescribeWhiteButton"
import { HeroCTAMinPrice } from "./HeroCTAMinPrice"
import { Solution } from "@/constants/solution/types"
import { getMinPackagePrice } from "@/lib/utils/getMinPackagePrice"

export function HeroCTA({ solution }: { solution: Solution }) {
  const packages = solution.pricing?.packages ?? []
  const minPrice = getMinPackagePrice(packages)

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <HeroCTAMinPrice min_price={minPrice} currency="BYN" />
      <DescribeWhiteButton />
    </div>
  )
}
