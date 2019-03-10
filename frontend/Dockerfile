FROM node:10.5 as build-deps

# set working directory
ENV NODE_ROOT /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install @angular/cli -g --silent
RUN npm install
RUN npm run config ## need to figure out another option for this as this locks the enviornment variables in @ build time - maybe we dont have nginx and this just gets served by ng and use the proxy infront
RUN ng build --prod

FROM nginx

FROM nginx:1.15-alpine
COPY --from=build-deps /usr/src/app/dist/angular-client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
