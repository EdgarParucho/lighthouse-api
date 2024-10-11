const express = require('express');
const router = express.Router();
const { jwtCheck } = require('../middleware/authenticator');
const { authRouter } = require('./authRouter');
const { habitRouter } = require('./habitRouter');

router.use('/', jwtCheck, authRouter);
router.use('/habit', jwtCheck, habitRouter);

module.exports = router;