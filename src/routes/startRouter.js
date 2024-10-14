const express = require('express');
const router = express.Router();
const { start } = require('../services/startService.js');

router.get('/', startHandler);

function startHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  start(userID)
    .then(({ statusCode = 200, ...data }) => res.status(statusCode).json({ ...data }))
    .catch((error) => next(error));
}

module.exports = { startRouter: router };