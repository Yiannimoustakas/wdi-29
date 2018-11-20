var express = require('express');
var router = express.Router();

/* GET users listing. */
// GET to /users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// '/users/:id'
// router.get('/:id', ...);

module.exports = router;
