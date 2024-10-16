const express = require('express');
const router = express.Router();
const schemaValidator = require('../middleware/schemaValidator');
const {
  createRecordSchema,
  updateRecordSchema,
} = require('../validationSchemas/recordValidationSchemas');
const idSchema = require('../validationSchemas/idValidationSchema');

router.post('/',
  schemaValidator({ validationKey: 'body', schema: createRecordSchema }),
  createRecordHandler,
);

router.put('/:id',
  schemaValidator({ validationKey: 'params', schema: idSchema }),
  schemaValidator({ validationKey: 'body', schema: updateRecordSchema }),
  updateRecordHandler,
)

function createRecordHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const payload = { userID, ...req.body };
  const { CreateRecord } = require('../services/recordService');
  CreateRecord(payload)
    .then((data) => res.status(201).json(data))
    .catch((error) => next(error))
}

function updateRecordHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const recordID = req.params.id;
  const { UpdateRecord } = require('../services/recordService');
  UpdateRecord({ userID, recordID, values: req.body })
    .then(() => res.sendStatus(204))
    .catch((error) => next(error))
}

module.exports = { recordRouter: router };
