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

  try {
    const cached = await redis.get(key)

    if (cached) {
      return JSON.parse(cached) as T
    }
  } catch {
    await redis.del(key)
  }

  const result = await fn()
  await redis.setex(key, ttl, JSON.stringify(result))
  return result
}

export async function invalidateCache(pattern: string) {
  if (!redis) return

  const stream = redis.scanStream({
    match: pattern,
    count: 100,
  })

  const pipeline = redis.pipeline()

  for await (const keys of stream) {
    for (const key of keys) {
      pipeline.del(key)
    }
  }

  await pipeline.exec()
}
