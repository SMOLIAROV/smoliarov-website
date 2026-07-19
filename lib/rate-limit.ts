import { RateLimiterRedis } from "rate-limiter-flexible"
import { redis } from "./redis/redis"

export const contactFormLimiter = redis
  ? new RateLimiterRedis({
      storeClient: redis,
      keyPrefix: "contact_form",
      points: 5,
      duration: 60,
    })
  : null
