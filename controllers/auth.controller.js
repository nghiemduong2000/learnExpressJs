const db = require('../db');
const md5 = require('md5');

module.exports.login = (req, res) => {
    res.render(`auth/login`);
}

module.exports.postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userCookie = db.get('users').find({email:email}).value();

    if(!userCookie) {
        res.render('auth/login', {
            errors: [
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }

    const hashedPassword = md5(password);

    if(userCookie.password !== hashedPassword) {
        res.render('auth/login', {
            errors: [
                'Wrong password'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', userCookie.id, {
        signed: true
    });
    res.redirect('/users');
}