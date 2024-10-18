const express = require('express');
const router = express.Router();
const schemaValidator = require('../middleware/schemaValidator');
const { updateAccountSchema } = require('../validationSchemas/accountValidationSchema');

router.patch('/',
  schemaValidator({ validationKey: 'body', schema: updateAccountSchema }),
  updateAccountHandler,
);

router.delete('/', deleteAccountHandler);

function updateAccountHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const values = req.body;
  const { UpdateAccount } = require('../services/accountService')
  UpdateAccount({ userID, values })
    .then(() => res.sendStatus(204))
    .catch((error) => next(error))
}

function deleteAccountHandler(req, res, next) {
  const userID = req.auth.payload.sub;
  const { DeleteAccount } = require('../services/accountService')
  DeleteAccount({ userID })
    .then(() => res.sendStatus(204))
    .catch((error) => next(error))
}

module.exports = { accountRouter: router };
