const express = require('express');
const router = express.Router();
const { authenticate } = require('../services/authService.js');

router.get('/', authenticator);

function authenticator(req, res, next) {
  const userID = req.auth.payload.sub;
  authenticate(userID)
    .then(({ statusCode = 200, ...data }) => res.status(statusCode).json({ ...data }))
    .catch((error) => next(error));
}

module.exports = { authRouter: router };