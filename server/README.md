# B2B Ecommerce - Server App

A REST API built with node.js and mongo DB.

## Acknowledgements

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Run Locally

First install [Docker](https://docs.docker.com/engine/install/)

Run a MongoDB Docker image

```bash
  docker run --name mongo-instance  -d mongo -p 27017:27017
```

Clone the project

```bash
  git clone https://github.com/fabrozdev/b2b-ecommerce-server
```

Go to the project directory

```bash
  cd b2b-ecommerce-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
