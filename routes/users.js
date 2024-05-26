const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);

usersRouter.delete(
  "/users/:id",
  checkAuth,
  deleteUser,
  sendUserDeleted
); 

module.exports = usersRouter;