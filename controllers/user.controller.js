const db = require('../db');
const shortid = require('shortid');

module.exports.index = (req, res) => {
    res.render(`user/index`, {
        users: db.get('users').value(),
    });
}

module.exports.search = (req, res) => {
    let search_query = req.query.search_query;
    let matchedUsers = db.get('users').value().filter((user) => {
        return user.name.toLowerCase().indexOf(search_query.toLowerCase()) !== -1;
    })
    res.render(`user/index`, {
        users: matchedUsers,
        keyword: search_query
    })
}

module.exports.view = (req, res) => {
    const id = req.params.id;
    const user = db.get('users').find({id: id}).value();
    res.render('user/view', {
        user: user
    })
}

module.exports.createPost = (req, res) => {
    req.body.id = shortid.generate();
    let errors = [];
    if (!req.body.name) {
        errors.push('Name is required.');
    }
    if (!req.body.phone) {
        errors.push('Phone is required.');
    }
    if (errors.length) {
        res.render('user/create', {
            values: req.body,
            errors: errors
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');
}

module.exports.create = (req, res) => {
    res.render('user/create');
}