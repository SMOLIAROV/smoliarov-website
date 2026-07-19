# ========================
# 1. Dependencies
# ========================
FROM node:22-slim AS deps

WORKDIR /app

COPY package*.json ./
RUN npm ci

# ========================
# 2. Builder
# ========================
FROM node:22-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN apt-get update -y && apt-get install -y openssl

ARG DATABASE_URL
ARG NEXT_PUBLIC_SITE_URL

ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

RUN npx prisma generate

RUN npm run build

# ========================
# 3. Runner (production)
# ========================
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]