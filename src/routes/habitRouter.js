const express = require('express');
const router = express.Router();
const { CreateHabit } = require('../services/habitService');

router.post('/', createHabitHandler);

function createHabitHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  CreateHabit({ userID, name: req.body.name })
    .then(({ statusCode = 200, ...data }) => res.status(statusCode).json({ ...data }))
    .catch((error) => next(error))
}

module.exports = { habitRouter: router };
