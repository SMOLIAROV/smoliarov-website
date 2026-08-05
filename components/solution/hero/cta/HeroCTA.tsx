import { DescribeButton } from "@/components/common/Buttons/DescribeButton"
import { HeroCTAMinPrice } from "./HeroCTAMinPrice"

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <HeroCTAMinPrice price={500} currency="BYN" />
      <DescribeButton />
    </div>
  )
}
