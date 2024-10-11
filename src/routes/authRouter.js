const express = require('express');
const router = express.Router();
const { authenticate } = require('../services/authService.js');
const { responseHandlerOnSuccess } = require('../utils/responseHandler.js');

router.get('/', authenticator);

function authenticator(req, res, next) {
  const userID = req.auth.payload.sub;
  authenticate(userID)
    .then((data) => responseHandlerOnSuccess(res, data))
    .catch((error) => next(error));
}

module.exports = { authRouter: router };