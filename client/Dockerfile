FROM node:17
RUN mkdir -p /home/node/client/node_modules && chown -R node:node /home/node/client
WORKDIR /home/node/client

COPY package*.json ./
RUN npm install

COPY . ./

COPY --chown=node:node . .
USER node

RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
