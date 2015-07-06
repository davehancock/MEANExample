app.controller('PostsCtrl', function ($scope, $http) {

    $http.get('/api/posts')
        .success(function (posts) {
            $scope.posts = posts;
        });

    $scope.addPost = function () {

        var post = {
            username: 'foo user',
            body: $scope.postBody
        }

        if ($scope.postBody) {
            $http.post('/api/posts', post)
                .success(function (data, status, headers, config) {
                    $scope.posts.unshift(post);
                });
            $scope.postBody = null;
        }
    }

});