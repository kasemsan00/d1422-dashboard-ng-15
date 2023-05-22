FROM node:lts as build-stage
RUN apt-get update
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@latest
COPY package.json package.json
RUN npm install
COPY . .
RUN ng build --configuration=production --build-optimizer

FROM nginx:alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY ./config/nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
