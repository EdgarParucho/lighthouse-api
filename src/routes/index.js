const express = require('express');
const router = express.Router();
const { authRouter } = require('./authRouter');
const { jwtCheck } = require('../middleware/authenticator');

router.use('/', jwtCheck, authRouter);

module.exports = router;