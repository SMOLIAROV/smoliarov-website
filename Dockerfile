FROM node:22-slim AS deps

WORKDIR /app
COPY package*.json ./
RUN npm ci


FROM node:22-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN apt-get update -y && apt-get install -y openssl

ENV NEXT_PUBLIC_SITE_URL=$DATABASE_URL

RUN npx prisma generate
RUN npm run build

FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/content ./content
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]