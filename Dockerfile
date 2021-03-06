# Step 1: Install
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install

# Step 2: Build
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs

COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json

COPY --from=builder /app/apps/web/build ./apps/web/build
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json


CMD [ "yarn", "start:prod" ]