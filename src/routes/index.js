const express = require('express');
const router = express.Router();
const { jwtCheck } = require('../middleware/authenticator');
const { startRouter } = require('./startRouter');
const { habitRouter } = require('./habitRouter');
const { recordRouter } = require('./recordRouter');
const { accountRouter } = require('./accountRouter');

router.use('/', jwtCheck, startRouter);
router.use('/habit', jwtCheck, habitRouter);
router.use('/record', jwtCheck, recordRouter);
router.use('/account', jwtCheck, accountRouter);

module.exports = router;