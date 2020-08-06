// const db = require('../db');
const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
    // let page = parseInt(req.query.page) || 1; // n
    // let perPage = 8;
    // let start = (page - 1) * perPage;
    // let end = page * perPage
    // res.render('product/index', {
    //     products: db.get('products').value().slice(start, end)
    // });

    const products = await Product.find();
    res.render('product/index', {
        products: products
    })
}