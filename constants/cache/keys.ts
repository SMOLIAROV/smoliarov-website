export const CacheKeys = {
  reviews: {
    all: "reviews:all",

    latest: (solutionType?: string, count: number = 3) =>
      `reviews:latest:${solutionType ?? "all"}:${count}`,
  },
}
