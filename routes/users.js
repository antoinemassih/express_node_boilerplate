var express = require('express');
var router = express.Router();
var transactions = require('../query')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
