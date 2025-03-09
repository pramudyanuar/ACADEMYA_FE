# ======= STAGE 1: Build =======
FROM node:20 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Enable Corepack to prevent the "Text file busy" error
RUN corepack enable && npm ci --no-audit --no-fund

# Copy the entire project (after dependencies are installed)
COPY . .

# Build the project
RUN npm run build


# ======= STAGE 2: Production =======
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the built files and necessary dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
