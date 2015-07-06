app.controller('PostsCtrl', function ($scope, $http) {

    $http.get('http://localhost:3000/api/posts')
        .success(function (posts) {
            $scope.posts = posts;
        })

    $scope.addPost = function () {

        if ($scope.postBody) {
            $scope.posts.unshift({
                username: 'foo user',
                body: $scope.postBody
            });

            $scope.postBody = null;
        }
    }


});