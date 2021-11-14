# Step 1
FROM node:16-alpine AS builder
ENV NODE_ENV prod

WORKDIR /app
COPY . .
RUN yarn rebuild && yarn build

# Step 2
FROM node:16-alpine
ENV NODE_ENV prod

WORKDIR /app
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs

COPY --from=builder /app/apps/api/dist ./apps/apps/api/dist
COPY --from=builder /app/apps/web/build ./apps/apps/web/build

RUN rm -rf /app/.yarn/unplugged && yarn rebuild

CMD [ "yarn", "start:prod" ]