const router = require('../router');
const IdexController = require('./idex.controller');

router.get('/idex', IdexController.list);
router.get('/idex/:id', IdexController.read);

module.exports = router;