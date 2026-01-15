FROM node:20-alpine AS builder
WORKDIR /app
COPY server/package.json server/package-lock.json ./
RUN npm ci
COPY server/. .
RUN npm run build

# -------- Runtime stage --------
FROM node:20-alpine AS runner
WORKDIR /app
# Set production environment
ENV NODE_ENV=production
COPY --from=builder /app/package.json /app/package-lock.json ./ 
RUN npm ci --omit=dev
RUN addgroup -S app && adduser -S app -G app
COPY --from=builder /app/dist ./dist
USER app
EXPOSE 3000

ENTRYPOINT ["node", "dist/main.js"]

