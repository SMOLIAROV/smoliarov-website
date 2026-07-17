import { redis } from "./redis"
import { CacheOptions } from "./types"

export async function cache<T>(
  key: string,
  fn: () => Promise<T>,
  options: CacheOptions = {}
): Promise<T> {
  if (!redis) {
    return fn()
  }

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
  if (!redis) return

  const keys = await redis.keys(pattern)
  if (keys.length > 0) {
    await redis.del(...keys)
  }
}