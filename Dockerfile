FROM node:alpine as build

# Set working directory
WORKDIR /app

# Copy App source code
COPY . .

RUN yarn global add @angular/cli

RUN yarn
RUN yarn build

# Use Nginx Alpine image for serving
FROM nginx:1.16.0-alpine

# Copy the built app to NGINX's web root directory
COPY --from=build /app/docs /usr/share/nginx/html

# Remove the default NGINX configuration (if any) and copy custom NGINX config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80 for incoming traffic
EXPOSE 80

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]