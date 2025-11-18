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

# Copy the built files from the 'build' stage into the Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional, but good practice)
# If you had a custom nginx.conf file, you would copy it here.

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
