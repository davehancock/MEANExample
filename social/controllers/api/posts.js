var Post = require('../../models/post');
var User = require('../../models/user');
var router = require('express').Router();

router.get('/api/posts', function (req, res, next) {

    Post.find()
        .sort('-date')
        .populate('user')
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

    // TODO Understand how the username is extracted here
    User.findOne({username: req.auth.username}, function (err, user) {
        if (err) {
            return next(err);
        }

        var post = new Post({
            user: user,
            body: req.body.body
        });

        post.save(function (err, savedPost) {
            if (err) {
                // TODO understand what next() function does
                return next(err)
            }
            res.status(201).json(savedPost);
        });
    });

});

module.exports = router;