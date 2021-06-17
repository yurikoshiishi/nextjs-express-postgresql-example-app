FROM node:14

WORKDIR /usr/src/server

COPY package*.json .

RUN npm i

COPY . . 

# TODO: change between environment
# RUN npm run build

# CMD ["npm", "run", "start"]

CMD ["npm", "run", "dev"]