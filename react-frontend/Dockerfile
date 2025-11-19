# === Stage 1: Build the React Application ===
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
# Note: If your app uses environment variables, they must be set here (e.g., using --mode production)
RUN npm run build

# === Stage 2: Serve the Static Files with Nginx ===
FROM nginx:stable-alpine

# CRITICAL FIX 1: Copy the custom MIME types file to fix the "text/plain" error
COPY mime.types.conf /etc/nginx/conf.d/mime.types.conf

# CRITICAL FIX 2: Copy the custom Nginx config file (nginx.conf)
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built files from the 'build' stage into the Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
