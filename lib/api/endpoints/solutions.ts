import { CacheKeys } from "@/constants/cache/keys"
import { api } from "../client"
import { cache } from "@/lib/redis/cache"
import { SolutionPackagesResponse } from "../contracts/solutions"
import { CacheTTL } from "@/constants/cache/ttl"

export const getSolutionPackages = ({
  locale,
  solution_types,
}: {
  locale: string
  solution_types: string
}) =>
  cache(
    CacheKeys.solutions.packages(solution_types, locale),
    () =>
      api<SolutionPackagesResponse>(
        `/api/v1/solutions/package/${solution_types}/${locale}`,
        {
          method: "GET",
        }
      ),
    {
      ttl: CacheTTL.DAY,
    }
  )
