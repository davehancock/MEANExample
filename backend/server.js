var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/posts', function (req, res, next) {

    Post.find(function (err, posts) {
        if (err) {
            // TODO understand what next() function does
            return next(err);
        }
        res.json(posts);
        console.log('Sending response of: ', posts);
    });
})

app.post('/api/posts', function (req, res, next) {

    console.log('Post Received!');
    console.log('Post username: ', req.body.username);
    console.log('Post body: ', req.body.body);

    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });

    post.save(function (err, post) {
        if (err) {
            // TODO understand what next() function does
            return next(err)
        }
        res.status(201).json(post);
    })
})

app.listen(3000, function () {
    console.log('Server Listening on port:', 3000)
})
