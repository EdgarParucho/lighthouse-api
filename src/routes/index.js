const express = require('express');
const router = express.Router();
const { jwtCheck } = require('../middleware/authenticator');
const { habitRouter } = require('./habitRouter');
const { recordRouter } = require('./recordRouter');
const { accountRouter } = require('./accountRouter');
const { demoUser } = require('../config/auth');

router.use('/api/habit', jwtCheck, habitRouter);
router.use('/api/record', jwtCheck, recordRouter);
router.use('/api/account', jwtCheck, accountRouter);
router.use('/api/public', setDemoData);
router.use('/api/public/habit', habitRouter);
router.use('/api/public/record', recordRouter);
router.use('/api/public/account', accountRouter);
router.use('/*', (req, res) => res.sendStatus(404));

function setDemoData(req, res, next) {
  req.auth = { payload: { sub: demoUser } };
  next();
}

module.exports = { router };