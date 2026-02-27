FROM node:20-bullseye AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm ci

# Remove conflicts
RUN rm -rf node_modules
COPY . .
RUN npm run build

FROM node:20-bullseye AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
