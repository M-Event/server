const { sign, verify } = require("jsonwebtoken");
const secret = "kotak";

module.exports = {
  signToken: (payload) => sign(payload, secret),
  verifyToken: (token) => verify(token, secret),
};
