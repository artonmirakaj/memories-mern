const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const { mongoConnect } = require('./src/services/mongo');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: 'htpp://localhost:3000'
}));
app.use(morgan('combined'));
app.use(express.json());

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
  });
}

startServer();