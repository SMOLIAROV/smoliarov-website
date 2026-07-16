import Redis from "ioredis"
import { RateLimiterRedis } from "rate-limiter-flexible"

const redis = new Redis(process.env.REDIS_URL!)

export const contactFormLimiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: "contact_form",
  points: 5,
  duration: 60 * 60,
  blockDuration: 60 * 60,
})
