# FROM node:alpine as build

# # Set working directory
# WORKDIR /app

# # Copy App source code
# COPY . .

# RUN yarn global add @angular/cli

# RUN yarn
# RUN yarn build

# # Use Nginx Alpine image for serving
# FROM nginx:1.16.0-alpine

# # Copy the built app to NGINX's web root directory
# COPY --from=build /app/docs /usr/share/nginx/html

# # Remove the default NGINX configuration (if any) and copy custom NGINX config
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d

# # Expose port 80 for incoming traffic
# EXPOSE 80

# # Start NGINX when the container runs
# CMD ["nginx", "-g", "daemon off;"]

# Using 
# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

RUN yarn global add @angular/cli

# Install dependencies
RUN yarn

# Build the Angular application
RUN yarn build

# Install a simple web server to serve the built Angular application
RUN yarn global add http-server

# Expose the port the app runs on
EXPOSE 80

# Start the web server to serve the built Angular application
CMD ["http-server", "docs", "-p", "80"]