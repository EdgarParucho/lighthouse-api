const { auth } = require('express-oauth2-jwt-bearer');
const { audience, issuerBaseURL, tokenSigningAlg } = require('../config/auth');

const jwtCheck = auth({
  audience,
  issuerBaseURL,
  tokenSigningAlg,
});

module.exports = { jwtCheck };
