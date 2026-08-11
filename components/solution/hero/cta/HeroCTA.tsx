import { DescribeWhiteButton } from "@/components/common/Buttons/DescribeWhiteButton"
import { HeroCTAMinPrice } from "./HeroCTAMinPrice"
import { Solution } from "@/constants/solution/types"
import { getMinPackagePrice } from "@/lib/utils/getMinPackagePrice"

export function HeroCTA({ solution }: { solution: Solution }) {
  const currency = process.env.NEXT_PUBLIC_CURRENCY!
  const packages = solution.pricing?.packages ?? []
  const minPrice = getMinPackagePrice(packages)

  return (
    <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
      {minPrice && <HeroCTAMinPrice minPrice={minPrice} currency={currency} />}
      <DescribeWhiteButton />
    </div>
  )
}
