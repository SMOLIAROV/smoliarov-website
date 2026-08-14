import { SolutionPricingPackage } from "@/constants/solution/types"

export function getMinPackagePrice(
  packages: SolutionPricingPackage[]
): number | null {
  if (packages.length === 0) {
    return null
  }

  return Math.min(...packages.map((pkg) => pkg.price))
}
