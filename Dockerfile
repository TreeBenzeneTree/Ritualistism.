# Use an official Node.js runtime as the base image
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


//


//# RitualisticismApp Dockerfile
//FROM python:3.11-slim

//WORKDIR /app
//COPY . /app

//RUN pip install --no-cache-dir -r requirements.txt

//CMD ["python", "main.py"]
