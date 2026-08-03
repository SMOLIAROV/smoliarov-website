import { ReviewResponse } from "../contracts/reviews";
import { api } from "../client"
import { cache } from "@/lib/redis/cache";
import { CacheKeys } from "@/constants/cache/keys";
import { CacheTTL } from "@/constants/cache/ttl";


export const getAllReviews = () => 
  cache(CacheKeys.reviews.all, () =>
    api<ReviewResponse[]>("/api/v1/reviews", {
      method: "GET",
    }),
  {
    ttl: CacheTTL.DAY,
  }
)

export const getLatestReviews = (
  projectType?: string,
  count: number = 3
) => {
  const params = new URLSearchParams();

  if (projectType) {
    params.append("project_type", projectType);
  }
  params.append("count", String(count));
  
  return cache(CacheKeys.reviews.latest(projectType, count), () =>
    api<ReviewResponse[]>(`/api/v1/reviews/latest?${params.toString()}`, {
      method: "GET",
    }),
    {
      ttl: CacheTTL.DAY,
    }
  )
}