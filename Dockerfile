FROM node:14

WORKDIR /test-project/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
