# Project LZXKY

A CRUD project with a simple user interface to manage a list of schools.

## Getting Started

### Using Docker

1. Install [Docker](https://www.docker.com/get-started)
2. Run the following command in the root directory of the project:

```bash
docker build -t lzxky .
docker run -p 5000:5000 lzxky
```

3. Open your browser and go to [http://localhost:5000](http://localhost:5000)

### Using Node.js

1. Install [Node.js](https://nodejs.org/en/)
2. Run the following command in the root directory of the project:

```bash
cd project-lzxky
npm install
npm run build
cd ../server
npm install
npm start
```

3. Open your browser and go to [http://localhost:5000](http://localhost:5000)

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mongoose](https://mongoosejs.com/)
- [Axios](https://www.npmjs.com/package/axios)