const sendAllUsers = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.usersArray));
};

const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendMe = (req, res) => {
  console.log("User from token:", req.user);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "Пользователь обновлен" }));
};

const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

module.exports = {
  sendAllUsers,
  sendMe,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
};