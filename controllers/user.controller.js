// const db = require('../db');
const User = require('../models/user.model');
const md5 = require('md5');

module.exports.index = async (req, res) => {
    let users = await User.find();
    res.render(`user/index`, {
        users: users,
    });
}

module.exports.search = async (req, res) => {
    let search_query = req.query.search_query;
    let users = await User.find();
    let matchedUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(search_query.toLowerCase()) !== -1;
    })
    res.render(`user/index`, {
        users: matchedUsers,
        keyword: search_query
    })
}

module.exports.view = async (req, res) => {
    const id = req.params.id;
    await User.findById(id, (err, ele) => {
        res.render('user/view', {
            user: ele
        })
    });
    
}

module.exports.createPost = async (req, res) => {
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    req.body.password = md5(req.body.password);
    await User.create(req.body, (err, ele) => {
        if(err) return handleError(err);
    });
    res.redirect('/users');
}

module.exports.create = (req, res) => {
    res.render('user/create');
}