var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/cookie', (req, res) => {
    res.cookie('userId', 12345);
    res.send('Hello');
});

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:id', controller.view)

router.post('/create', validate.createPost, controller.createPost);

module.exports = router;