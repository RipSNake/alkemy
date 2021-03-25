var express = require('express');
var router = express.Router();

const operationsCtrl = require('../controllers/operationsController');

/* GET operations listing. */
router.get('/', operationsCtrl.getOperations);

/* POST new operation */
router.post('/', operationsCtrl.createOperation);

/* GET operation by id. */
router.get('/:id', operationsCtrl.getOperation);

/* UPDATE operation by id */
router.put('/:id', operationsCtrl.updateOperation);

/* DELETE operation by id. */
router.delete('/:id', operationsCtrl.deleteOperation);

module.exports = router;