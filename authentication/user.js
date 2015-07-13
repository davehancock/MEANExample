var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth_demo');

var user = mongoose.Schema({
    username: String,
    password: String
})

// TODO understand this
module.exports = mongoose.model('User', user);