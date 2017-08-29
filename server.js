const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const Game = require('./models/model');
const { getGames, getGame, postGame, deleteGame } = require('./routes/route');

const server = express();
server.use(bodyParser.json());

mongoose.Promise = global.Promise;
const connect = mongoose.connect('mongodb://localhost/', { useMongoClient: true });

connect.then(() => {
  const port = 3000;
  const routes = require('./routes/route');
  routes(server);
  console.log(`Server listening on port ${port}`);
}, (err) => {
  console.log{'\n****************');
  console.log("Error: Failed to connect to MongoDB");
  console.log{'****************\n');
});
