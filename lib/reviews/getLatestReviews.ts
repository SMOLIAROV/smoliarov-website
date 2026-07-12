import { prisma } from "../prisma/prisma"
import { cache } from "../redis/cache"

export async function getLatestReviews() {
  return cache(
    "reviews:latest",
    async () => {
      return prisma.review.findMany({
        orderBy: { date: "desc" },
        take: 3,
      })
    },
    { ttl: 3600 }
  )
}
