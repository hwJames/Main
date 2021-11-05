# Step 1
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Step 2
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD [ "yarn", "start:prod" ]