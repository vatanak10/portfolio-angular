FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn global add @angular/cli

RUN yarn

CMD ["ng", "serve", "--host", "0.0.0.0"]