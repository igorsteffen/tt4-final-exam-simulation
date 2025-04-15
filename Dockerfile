# Stage 1
# Build My Frontend Framework
FROM node:lts-alpine AS builder

WORKDIR /app

COPY ./frontend/package*.json /app/

RUN npm install

COPY ./frontend /app

RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]