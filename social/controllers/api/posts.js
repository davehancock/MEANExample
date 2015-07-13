var Post = require('../../models/post');
var router = require('express').Router();

router.get('/api/posts', function (req, res, next) {

    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                // TODO understand what next() function does
                return next(err);
            }
            res.json(posts);
            console.log('Sending response of: ', posts);
        });
});

router.post('/api/posts', function (req, res, next) {

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
    });

});

module.exports = router;