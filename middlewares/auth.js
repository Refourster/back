const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log("Authorization Header:", authorization);

  if (!authorization || !authorization.startsWith("Bearer ")) {
    console.log("Authorization header missing or malformed");
    return res.status(401).send({ message: "Необходима авторизация" });
  }

  const token = authorization.replace("Bearer ", "");
  console.log("Token:", token);

  try {
    req.user = jwt.verify(token, "some-secret-key");
    console.log("Decoded Token:", req.user);
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).send({ message: "Необходима авторизация" });
  }

  next();
};

const checkCookiesJWT = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  if (!req.cookies.jwt) {
    console.log("JWT cookie missing");
    return res.redirect("/");
  }
  req.headers.authorization = `Bearer ${req.cookies.jwt}`;
  next();
}; 

module.exports = { checkAuth, checkCookiesJWT };