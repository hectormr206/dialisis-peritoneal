# Debug version - Simple Node.js server
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install serve globally
RUN npm install -g serve

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3020
EXPOSE 3020

# Start with serve
CMD ["serve", "-s", "dist", "-l", "3020"] 
