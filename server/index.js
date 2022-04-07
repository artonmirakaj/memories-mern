const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const postRoutes = require('./src/routes/posts/posts.router');

require('dotenv').config();

const { mongoConnect } = require('./src/services/mongo');

const app = express();

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/posts', postRoutes);


async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
  });
}

startServer();