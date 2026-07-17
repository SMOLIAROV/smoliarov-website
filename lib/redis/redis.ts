import Redis from "ioredis"

const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined
}

const isRedisEnabled = process.env.NODE_ENV === "production"

export const redis: Redis | null = isRedisEnabled
  ? globalForRedis.redis ??
    new Redis(process.env.REDIS_URL!, {
      maxRetriesPerRequest: null,
    })
  : null

if (isRedisEnabled) {
  globalForRedis.redis = redis!
}