FROM ubuntu:24.04

RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install && npm ci --only=production
COPY . .
RUN chmod +x build/chen

EXPOSE 4000
CMD ["node", "server.js"]
