var db = require('../db');

var user = db.Schema({
    username: {type: String, required: true},
    password: {type: String, requred: true, select: false}
})

// TODO understand this
module.exports = db.model('User', user);