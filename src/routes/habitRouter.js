const express = require('express');
const router = express.Router();
const { CreateHabit, updateHabit } = require('../services/habitService');
const schemaValidator = require('../middleware/schemaValidator');
const idSchema = require('../validationSchemas/idValidationSchema');
const {
  createHabitSchema,
  updateHabitSchema,
} = require('../validationSchemas/habitValidationSchema');

router.post('/',
  schemaValidator({ validationKey: 'body', schema: createHabitSchema }),
  createHabitHandler,
);

router.put('/:id',
  schemaValidator({ validationKey: 'params', schema: idSchema}),
  schemaValidator({ validationKey: 'body', schema: updateHabitSchema }),
  updateHabitHandler,
)

function createHabitHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  CreateHabit({ userID, name: req.body.name })
    .then((data) => res.status(201).json(data))
    .catch((error) => next(error))
}

function updateHabitHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const habitID = req.params.id;
  updateHabit({ habitID, userID, values: req.body })
    .then(() => res.sendStatus(204))
    .catch((error) => next(error))
}

module.exports = { habitRouter: router };
