var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.index);

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:id', controller.view)

router.post('/create', controller.createPost);

module.exports = router;