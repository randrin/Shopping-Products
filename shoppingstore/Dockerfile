FROM node:10.15.3
RUN mkdir -p /usr/src/shoppingstore
COPY dist /usr/src/shoppingstore/dist
COPY middleware.js /usr/src/shoppingstore/
COPY data.json /usr/src/shoppingstore/
COPY server.js /usr/src/shoppingstore/server.js
COPY deploy-package.json /usr/src/shoppingstore/package.json
WORKDIR /usr/src/shoppingstore
RUN npm install
EXPOSE 80
CMD ["node", "server.js"]