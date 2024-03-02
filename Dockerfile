FROM node:21-alpine
WORKDIR /usr/src/app
COPY project-lzxky/package*.json ./
RUN npm install
COPY project-lzxky/ .
RUN npm run build
WORKDIR /usr/src/app/server
COPY server/package*.json ./
RUN npm install
ENV NODE_ENV=docker_prod
ENV MONGODB_URI=
COPY server/ .
EXPOSE 5000
CMD [ "npm", "start" ]