import { CacheKeys } from "@/constants/cache/keys"
import { api } from "../client"
import { cache } from "@/lib/redis/cache"
import { SolutionPackagesResponse } from "../contracts/solutions"
import { CacheTTL } from "@/constants/cache/ttl"

export const getSolutionPackages = ({
  locale,
  solutionTypes,
}: {
  locale: string
  solutionTypes: string
}) =>
  cache(
    CacheKeys.solutions.packages(solutionTypes, locale),
    () =>
      api<SolutionPackagesResponse>(
        `/api/v1/solutions/package/${solutionTypes}/${locale}`,
        {
          method: "GET",
        }
      ),
    {
      ttl: CacheTTL.DAY,
    }
  )
