# Fetching the latest node image on apline linux
FROM node:alpine AS builder
# Declaring env
ENV NODE_ENV production
# Setting up the work directory
WORKDIR /app
# Copying all the files in our project
COPY . /app/
# Installing dependencies
COPY ./package.json ./
# install dependencies
RUN npm install

# Building our application
RUN npm run build
# Fetching the latest nginx image
FROM nginx
# Copying built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Remove default nginx static assets
# RUN rm -rf ./*
RUN rm -rf /etc/nginx/conf.d/default.conf
# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]
