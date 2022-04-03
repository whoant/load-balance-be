FROM node:16-alpine

ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN npm install pm2 -g
COPY . .
CMD ["pm2-runtime", "process.yml"]