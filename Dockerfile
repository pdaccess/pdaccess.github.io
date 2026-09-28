FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm run generate

FROM nginx:alpine

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY pdaccess.app.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
