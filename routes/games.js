const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const {
  findAllGames,
  createGame,
  findGameById,
  checkIsVoteRequest,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
} = require("../middlewares/games");

const {
  sendAllGames,
  sendGameCreated,
  sendGameById, 
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  createGame,
  sendGameCreated,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkAuth,
);

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  updateGame,
  sendGameUpdated,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
);

gamesRouter.delete(
  "/games/:id", 
  checkAuth, 
  deleteGame, 
  sendGameDeleted
); 

module.exports = gamesRouter;