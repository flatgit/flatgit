from node:9.11-alpine

COPY . .
RUN npm i
RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 8000
