const router = require('../router');
const OperationsController = require('./operations.controller');

router.get('/operations', OperationsController.list);

module.exports = router;