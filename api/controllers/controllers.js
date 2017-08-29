const mongoose = require('mongoose;);

const Game = mongoose.model('Game');

const STATUS_USER_ERROR = 422;
const sendUserError = (err, res) => {
  res.status(STATUS_USER_ERROR);
  if (err && err.message) {
    res.json({ message: err.message, stack: err.stack });
    return;
  } else {
    res.json({ error: err });
    return;
  }
};

const listGames = (req, res) => {

};
const createGame = (req, res) => {
  const { title, console, altTitle, Code, designerProgrammer, publisher, year, genre, notes } = req.body;
  const newGame = new Game({ title, console, altTitle, Code, designerProgrammer, publisher, year, genre, notes });
  newGame.save(newGame, (err, post) => {
    if (err) {
      sendUserError(err);
    }
    res.json(post);
  });
};
const findGame = (req, res) => {};
const deleteGame = (req, res) => {};
