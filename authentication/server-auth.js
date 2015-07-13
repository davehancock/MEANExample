var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var _ = require('lodash');
var bcrypt = require('bcrypt');

var User = require('./user');

var users = [
    {username: 'foo1', password: '$2a$10$uupug5IxHx7WlwkbC8h2Du7hjOY7rY8FSOvsYT67W7yOdrNjNQFnG'},
    {username: 'foo2', password: '$2a$10$OPfyGWrmaEQeeCT4TypIEeId6o.MXq8rHa6Mh4Np0VppYFc2H8y/G'}
];

var app = express();
app.use(bodyParser.json());

app.post('/user', function (req, res, next) {
    var user = new User({username: req.body.username});
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        user.password = hash;
        user.save(function (err, user) {
            if (err) {
                throw next(err);
            }
            res.sendStatus(201);
        });
    });
});

app.get('/user', function (req, res) {

    var token = req.headers['x-auth'];
    var user = jwt.decode(token, secretKey);

    res.json(user);
});

var secretKey = 'myownsecret';

app.post('/session', function (req, res) {

    var username = req.body.username;
    var user = findUserByUsername(username);

    validateUser(user, req.body.password, function (err, valid) {
        if (err || !valid) {
            return res.sendStatus(401);
        }
        var token = jwt.encode({username: username}, secretKey);
        res.json(token);
    });
});


function findUserByUsername(username) {
    return _.find(users, {username: username});
}

function validateUser(user, password, cb) {
    bcrypt.compare(password, user.password, cb)
}

app.listen(3000);