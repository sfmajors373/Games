model.exports = (app) => {
  const controllerMethods = require( // fill this in when I get there

  // GET /games ---> get all the games
  server.route('/games')
    .get(controllerMethods.listGames);
  // POST /games --> create a game
  server.route('/games')
    .post(controllerMethods.createGame);
  // GET /games/:id ---> get a single game
  server.route('/games/:id')
    .get(controllerMethods.findGame);
  // DELETE /games/:id ---> delete a game
  server.route('/games/:id')
    .delete(controllerMethods.deleteGame);
};




// Possible extras, add to have it list, add to want it list, maybe find it
