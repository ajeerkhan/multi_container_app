FROM node:8

# Create app directory
WORKDIR /usr/src/app

ARG HOSTS
ARG NO_PROXY
ARG NODE_ENV=production
ARG REPOSITORY_SERVER

ENV HOSTS ${HOSTS:-} \
    NODE_ENV=${NODE_ENV} \
    NO_PROXY=${NO_PROXY} \
    MONGODB_CONNECTION_STRING=${MONGODB_CONNECTION_STRING}
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./
#COPY . ./
COPY ["package.json", "/usr/src/app/"]
RUN echo "${HOSTS}" >> /etc/hosts && \
    chown -R node:node /usr/src/app

USER  node

#install dependencies node modules.
RUN echo "NODE_ENV: ${NODE_ENV}" && \
    #yarn config set registry "http://${REPOSITORY_SERVER}/repository/npm-all/" && \
    yarn config list && \
    yarn install && \
    yarn cache clean
#RUN pwd
#Copy source scripts
COPY ["index.js","/usr/src/app/"]
COPY ["app", "/usr/src/app/app"]
#RUN ls -la /src/*
#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
#COPY . ./

EXPOSE 8080
CMD [ "node", "index.js" ]