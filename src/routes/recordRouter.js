const express = require('express');
const router = express.Router();
const schemaValidator = require('../middleware/schemaValidator');
const {
  createRecordSchema,
} = require('../validationSchemas/recordValidationSchemas');

router.post('/',
  schemaValidator({ validationKey: 'body', schema: createRecordSchema }),
  createRecordHandler,
)

function createRecordHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const payload = { userID, ...req.body };
  const { CreateRecord } = require('../services/recordService');
  CreateRecord(payload)
    .then((data) => res.status(201).json(data))
    .catch((error) => next(error))
}

module.exports = { recordRouter: router };
