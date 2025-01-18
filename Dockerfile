FROM node AS build

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .

RUN npm install
COPY . .



RUN npm run build

FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
RUN  rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

COPY react.615915.xyz.conf /etc/nginx/conf.d

RUN mkdir -p /etc/ssl/certs/ && \ 
    mkdir -p /etc/ssl/ 


COPY ./certs/fullchain.pem /etc/ssl/certs/fullchain.pem 
COPY ./certs/privkey.pem /etc/ssl/privkey.pem

RUN chmod 644 /etc/ssl/certs/fullchain.pem && \ 
    chmod 600 /etc/ssl/privkey.pem && \
    chown root:root /etc/ssl/privkey.pem

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]