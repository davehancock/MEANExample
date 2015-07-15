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
    var auth = jwt.decode(token, secretKey);

    User.findOne({username: auth.username}, function (err, user) {
        res.json(user);
    })
});

var secretKey = 'myownsecret';

app.post('/session', function (req, res) {

    User.findOne({username: req.body.username}).select('password').exec(function (err, user, next) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.sendStatus(401);
        }
        bcrypt.compare(req.body.password, user.password, function (err, valid) {
            if (err) {
                return next(err);
            }
            if (!valid) {
                return res.sendStatus(401);
            }
            var token = jwt.encode({username: user.username}, secretKey);
            res.json(token);
        });
    });
});

app.listen(3000);