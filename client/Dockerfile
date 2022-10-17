FROM node:18-alpine3.15 as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM  nginx:1.23.1
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
