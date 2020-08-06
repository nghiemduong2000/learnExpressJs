var express = require('express');
var router = express.Router();
const controller = require('../controllers/cart.controller');

router.get('/add/:productId', controller.addToCart)

module.exports = router;