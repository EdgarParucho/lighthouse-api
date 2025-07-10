const express = require('express');
const router = express.Router();
const { jwtCheck } = require('../middleware/authenticator');
const { startRouter } = require('./startRouter');
const { habitRouter } = require('./habitRouter');
const { recordRouter } = require('./recordRouter');
const { accountRouter } = require('./accountRouter');
const { demoUser } = require('../config/index.js');

router.use('/start', jwtCheck, startRouter);
router.use('/habit', jwtCheck, habitRouter);
router.use('/record', jwtCheck, recordRouter);
router.use('/account', jwtCheck, accountRouter);
router.use('/public', setDemoData);
router.use('/public/start', startRouter);
router.use('/public/habit', habitRouter);
router.use('/public/record', recordRouter);
router.use('/public/account', accountRouter);

function setDemoData(req, res, next) {
  req.auth = { payload: { sub: demoUser } };
  next();
}

module.exports = router;