FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

# --- CRITICAL FIXES FOR NGINX CONFIGURATION ---

# 2. Copy the main nginx.conf file
COPY nginx.conf /etc/nginx/nginx.conf

# --- END CRITICAL FIXES ---

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
