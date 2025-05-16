# server Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
ENV PORT=4000
EXPOSE 4000
CMD ["node", "src/index.js"]
