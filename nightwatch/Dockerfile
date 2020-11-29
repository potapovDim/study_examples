FROM node:15.3.0-alpine3.10

WORKDIR /usr/automation

COPY ./ ./

RUN npm install

CMD ["npm", "run", "test"]