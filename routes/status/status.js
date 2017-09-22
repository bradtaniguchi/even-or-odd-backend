const router = require('express').Router();

// supported router defintions
router.get('/', get);
router.get('/get', get);
router.post('/post', post);

// router declarations
function get(req, res) {
  console.log('status-get');
}

function post(req, res) {
  console.log('status-post');
} 
module.exports = router;