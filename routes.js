const Router = require('express');
const router = new Router();
const Controller = require('./controller.js');

router.post('/item', Controller.create);

module.exports = router;