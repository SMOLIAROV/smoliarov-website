import { redis } from "./redis"
import { CacheOptions } from "./types"

export async function cache<T>(
  key: string,
  fn: () => Promise<T>,
  options: CacheOptions = {}
) {
  const { ttl = 300 } = options

  const cached = await redis.get(key)
  if (cached) {
    return JSON.parse(cached) as T
  }

  const result = await fn()

  await redis.setex(key, ttl, JSON.stringify(result))

  return result
}

export async function invalidateCache(pattern: string) {
  const keys = await redis.keys(pattern)
  if (keys.length > 0) {
    await redis.del(...keys)
  }
}
