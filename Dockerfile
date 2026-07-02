# Debug version - Simple Node.js server
# node >= 20 required: workbox's @rollup/plugin-terser -> serialize-javascript
# needs the global WebCrypto API and crashes on node 18
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install

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
