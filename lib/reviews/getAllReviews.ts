import { prisma } from "../prisma/prisma"
import { cache } from "../redis/cache"

export async function getAllReviews() {
  return cache(
    "reviews:latest",
    async () => {
      return prisma.review.findMany({
        orderBy: { date: "desc" },
      })
    },
    { ttl: 3600 }
  )
}
