app.controller('PostsCtrl', function ($scope, PostsService) {

    PostsService.getPosts().success(function (posts) {
        $scope.posts = posts;
    });

    $scope.addPost = function () {

        if ($scope.postBody) {

            PostsService.savePost({body: $scope.postBody}).success(function (data) {
                $scope.posts.unshift(data);
                $scope.postBody = null;
            });
        }
    }

});