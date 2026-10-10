# Production Multi-Stage Dockerfile for Coolify
FROM node:22-alpine AS builder

WORKDIR /app

# Ensure devDependencies (typescript, vite, esbuild) are installed during build stage
ENV NODE_ENV=development

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy source code
COPY . .

# Build Vite frontend
RUN npm run build

# Production Stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production && npm install tsx -g

# Copy build artifacts and source code
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts

EXPOSE 3000

# Start Express server via tsx
CMD ["npx", "tsx", "server.ts"]
