const express = require('express');
const router = express.Router();
const { CreateHabit } = require('../services/habitService');
const { responseHandlerOnSuccess } = require('../utils/responseHandler');

router.post('/', createHabitHandler);

function createHabitHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  CreateHabit({ userID, name: req.body.name })
    .then((data) => responseHandlerOnSuccess(res, data))
    .catch((error) => next(error))
}

module.exports = { habitRouter: router };
