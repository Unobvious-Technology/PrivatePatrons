# PrivatePatrons

The Inbox for Sex Workers — make the most of your time when communicating with clients.

## Setup

The project is written in Typescript with tslint configured to prettier standards, is built with Webpack, uses Koa as the server, and Nodemon as a process manager in development, and Apollo as the GraphQL server.

### Requirements

• Node.js (LTS Carbon [>= 8.10])
• Yarn
• PostgreSQL 10 (via Docker)
• psql (from a local install of postgresql)

#### Installation of Node.js with nvm:

1) Install `nvm`, see: https://github.com/creationix/nvm#installation
2) Install node.js (lts/carbon):

```
nvm install lts/carbon
```

3) Use it:
```
nvm use lts/carbon
```

4) Install yarn:
```
npm install -g yarn
```

#### Installation of PostgreSQL as Docker Service

1. Create a data container for storing the postgresql data, this allows us to replace the postgresql container without loosing data:

```
docker create -v /var/lib/postgresql/data --name privatepatrons-pg-data postgres:10-alpine
```

2. Create the postgresql container:
```
docker run --name privatepatrons-pg -e POSTGRES_PASSWORD=ok -p 12032:5432 -d --volumes-from privatepatrons-pg-data postgres:10-alpine
```

3. Test the connection:

```
psql -p 12032 -h localhost -U postgres
```

## Development

To start the server for development use the following, which will listen by default on localhost:12080

```
yarn start:dev
```

Note: You may see an error from nodemon, but it'll actually resolve itself, see https://github.com/remy/nodemon/issues/1297
