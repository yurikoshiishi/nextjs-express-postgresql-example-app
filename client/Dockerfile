FROM node:14

COPY package*json .

RUN npm i

COPY . . 

# TODO: change between env
# RUN npm run build

# CMD ["npm", "run", "start"]

CMD ["npm", "run", "dev"]