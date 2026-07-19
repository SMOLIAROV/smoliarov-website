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

ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN apt-get update && apt-get install -y openssl

RUN npx prisma generate
RUN npm run build

# ========================
# 3. Runner (production)
# ========================
FROM node:22-slim

WORKDIR /app

ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/content ./content
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 3000

CMD ["node", "server.js"]