const router = require('express').Router();

// router handlers
const users = require('./users'); 
const games = require('./games');
const status = require('./status');

// available routes at /api/*
router.use('/users', users);
router.use('/games', games);
router.use('/status', status);
module.exports = router;