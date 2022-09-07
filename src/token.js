const jwt = require("jsonwebtoken");

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
  // the two paramteters, payload and secret - payload includes information needed to identify who the user is, no sensetive info. Secret is the secret phrase, this is a string of text that only the server knows

  return jwt.sign({ payload }, secret);
}

// console.log(createToken({ username: "lorel", id: 17 }, "mysecret"));

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, expiry) {
  return jwt.sign({ payload }, secret, { expiresIn: expiry });
}

// console.log(
//   createTokenWithExpiry({ username: "lorel", id: 5 }, "topSecret", "10h")
// );

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return false;
  }
}

// const token = createTokenWithExpiry(
//   { username: "lorel", id: 5 },
//   "topSecret",
//   "10h"
// );
// console.log(token);

// console.log(verifyToken(token, "topSecret"));

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
