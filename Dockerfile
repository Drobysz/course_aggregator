FROM node:22.13-alpine

WORKDIR /opt/app

ADD package.json package.json

ADD . .

ENV NODE_ENV production

RUN npm run build

RUN npm prune production

CMD ["npm", "start"]

EXPOSE 3000