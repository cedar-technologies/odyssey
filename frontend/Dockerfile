FROM node:10.5 as build-deps

# set working directory
ENV NODE_ROOT /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm rebuild node-sass
RUN npm install @angular/cli -g --silent
RUN npm install
RUN ng build --prod

FROM nginx

FROM nginx:1.15-alpine
COPY --from=build-deps /usr/src/app/dist/frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
