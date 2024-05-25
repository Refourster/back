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
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  findAllGames,
  checkIsGameExists,
  checkAuth,
  createGame,
  sendGameCreated,
);

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  checkAuth,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsVoteRequest,
  findGameById,
  updateGame,
  sendGameUpdated,
);

gamesRouter.delete(
  "/games/:id", 
  checkAuth, 
  findAllGames,
  checkIsGameExists,
  deleteGame, 
  sendGameDeleted
);

module.exports = gamesRouter;