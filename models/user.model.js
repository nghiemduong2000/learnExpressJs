const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String
}, {
    versionKey: '_somethingElse'
});

const User = mongoose.model('User', userSchema);

module.exports = User;