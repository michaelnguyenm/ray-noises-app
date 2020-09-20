FROM node:12.18.1-alpine3.12 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@3.4.3 -g
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
RUN apk add --no-cache jq
RUN mkdir -p /usr/share/nginx/media
COPY --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/res /usr/share/nginx/media
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh generate_config_js.sh /
RUN chmod +x docker-entrypoint.sh generate_config_js.sh
EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]