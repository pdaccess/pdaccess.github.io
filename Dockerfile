FROM node:10-alpine as builder

COPY . /src
WORKDIR /src

RUN yarn install
RUN yarn run generate

FROM nginx:1.14-alpine

#ADD app.tar.gz /usr/share/nginx/html
COPY --from=builder /src/dist /app
#RUN tar  app.tar.gz /app 
#ADD ssl /app/ssl

RUN chown -R nginx /app
#RUN cp /app/dispatcher.app.conf /etc/nginx/nginx.conf
ADD pdaccess.app.conf /etc/nginx/nginx.conf

#CMD ["nginx", "-c", "/app/cs.app.conf"]
