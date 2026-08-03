export const CacheKeys = {
    reviews: {
        all: 'reviews:all',

        latest: (
            projectType?: string,
            count: number = 3
        ) => `reviews:latest:${projectType ?? 'all'}:${count}`
    }
}