FROM node:22-slim AS build

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.7.1 --activate

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:22-slim AS production

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./build

EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
