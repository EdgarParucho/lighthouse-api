const express = require('express');
const router = express.Router();
const { createUser } = require('../services/userService.js');

router.post('/', createUserHandler);
router.get('/', (req, res) => res.json({ habits: [], records: [] }));

function createUserHandler(req, res) {
  const payload = req.body;
  createUser(payload)
    .then((response) => res.status(201).json({ message: 'User created' }))
    .catch((error) => res.status(500).json({ message: error.message }))
}

module.exports = { userRouter: router };