const express = require('express');
const router = express.Router();
const { jwtCheck } = require('../middleware/authenticator');
const { startRouter } = require('./startRouter');
const { habitRouter } = require('./habitRouter');

router.use('/', jwtCheck, startRouter);
router.use('/habit', jwtCheck, habitRouter);

module.exports = router;