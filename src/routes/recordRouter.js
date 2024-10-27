const express = require('express');
const router = express.Router();
const bodyStateValidator = require('../middleware/bodyStateValidator');
const schemaValidator = require('../middleware/schemaValidator');
const {
  createRecordSchema,
  updateRecordSchema,
  getRecordSchema,
} = require('../validationSchemas/recordValidationSchemas');
const idSchema = require('../validationSchemas/idValidationSchema');

router.post('/',
  bodyStateValidator({ required: true }),
  schemaValidator({ validationKey: 'body', schema: createRecordSchema }),
  createRecordHandler,
);

router.patch('/:id',
  bodyStateValidator({ required: true }),
  schemaValidator({ validationKey: 'params', schema: idSchema }),
  schemaValidator({ validationKey: 'body', schema: updateRecordSchema }),
  updateRecordHandler,
)

router.delete('/:id',
  bodyStateValidator({ required: false }),
  schemaValidator({ validationKey: 'params', schema: idSchema }),
  deleteRecordHandler,
)

router.get('/',
  bodyStateValidator({ required: false }),
  schemaValidator({ validationKey: 'query', schema: getRecordSchema }),
  getRecordsHandler,
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

function deleteRecordHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const recordID = req.params.id;
  const { DeleteRecord } = require('../services/recordService');
  DeleteRecord({ userID, recordID })
    .then(() => res.sendStatus(204))
    .catch((error) => next(error))
}

function getRecordsHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const { from, to } = req.query;
  const { GetRecords } = require('../services/recordService');
  GetRecords({ userID, from, to })
    .then((data) => res.json(data))
    .catch((error) => next(error))
}

module.exports = { recordRouter: router };
