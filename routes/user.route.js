var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })
const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', controller.index);

router.get('/cookie', (req, res) => {
    res.cookie('userId', 12345);
    res.send('Hello');
});

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:id', controller.view)

router.post('/create', upload.single('avatar'), validate.createPost, controller.createPost);

module.exports = router;