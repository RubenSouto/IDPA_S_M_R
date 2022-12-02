# Step 1: Build the app in image 'builder'
FROM node:current_version AS node_builder

RUN set -xe \
    && apk add --no-cache bash git openssh \
    && npm install -g npm \
    && git --version && bash --version && ssh -V && npm -v && node -v && yarn -version

WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
COPY angular.json /usr/src/app/angular.json
COPY tsconfig*.json ./

RUN npm install
RUN npm install -g @angular/cli@13.3.5
