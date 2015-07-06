app.controller('PostsCtrl', function ($scope, PostsService) {

    PostsService.getPosts().success(function (posts) {
        $scope.posts = posts;
    });

    $scope.addPost = function () {
        var post = {
            username: 'foo user',
            body: $scope.postBody
        }

        if ($scope.postBody) {
            PostsService.savePost(post).success(function (data) {
                $scope.posts.unshift(data);
                $scope.postBody = null;
            });
        }
    }

});