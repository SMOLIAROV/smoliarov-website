import { DescribeWhiteButton } from "@/components/common/Buttons/DescribeWhiteButton"
import { HeroCTAMinPrice } from "./HeroCTAMinPrice"

export function HeroCTA({ min_price }: { min_price: number }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <HeroCTAMinPrice min_price={min_price} currency="BYN" />
      <DescribeWhiteButton />
    </div>
  )
}
