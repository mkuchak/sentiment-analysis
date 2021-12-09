FROM node:17
RUN mkdir -p /home/node/web/node_modules && chown -R node:node /home/node/web
WORKDIR /home/node/web

COPY package*.json ./
RUN npm install

COPY . ./

COPY --chown=node:node . .
USER node

RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
