var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST new user */
router.post('/', function(req, res, next) {
  res.send('POST User');
});

/* GET user by id. */
router.get('/:id', function(req, res, next) {
  res.send(`GET User id: ${req.params.id}`);
});

/* UPDATE user by id. */
router.put('/:id', function(req, res, next) {
  res.send({'response':`Update User ${req.params.id} Data`});
});

/* DELETE user by id. */
router.delete('/:id', function(req, res, next) {
  res.send('Delete User'+req.params.id);
});

module.exports = router;
