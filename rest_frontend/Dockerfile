#stage 1
FROM node:20-alpine

RUN mkdir -p /app/src/
WORKDIR /app/src
COPY package.json .
RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm","start"]

