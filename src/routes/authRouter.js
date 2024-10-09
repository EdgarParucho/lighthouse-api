const express = require('express');
const router = express.Router();
const { authenticate } = require('../services/authService.js');
const { responseHandlerOnSuccess } = require('../utils/responseHandler.js');

router.get('/', authenticator);

async function authenticator(req, res, next) {
  const userID = req.auth.payload.sub;
  try {
    const data = await authenticate(userID);
    responseHandlerOnSuccess(res, data);
  } catch(error) {
    next(error);
  }
}

module.exports = { authRouter: router };