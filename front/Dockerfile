FROM node:alpine as build

ADD . /app
WORKDIR /app

RUN npm i
RUN npm run build
#/app/dist

#----------------------------------------------------------
FROM nginx:alpine as prod

# ADD ./dist /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html
ADD ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80