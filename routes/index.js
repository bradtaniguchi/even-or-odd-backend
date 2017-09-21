const router = require('express').Router();

// router handlers
const users = require('./users'); 
const games = require('./games');
const status = require('./status');
router.use('/users', users);

module.exports = router;