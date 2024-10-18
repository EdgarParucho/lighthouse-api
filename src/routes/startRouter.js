const express = require('express');
const router = express.Router();
const bodyStateValidator = require('../middleware/bodyStateValidator');
const { start } = require('../services/startService.js');

router.get('/', bodyStateValidator({ required: false }), startHandler);

function startHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  start(userID)
    .then(({ created, ...data }) => res.status(created ? 201 : 200).json({ ...data }))
    .catch((error) => next(error));
}

module.exports = { startRouter: router };