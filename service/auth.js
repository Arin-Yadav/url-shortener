const jwt = require("jsonwebtoken");
require("dotenv").config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}
const secret = process.env.JWT_SECRET;


function setUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, secret);
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
