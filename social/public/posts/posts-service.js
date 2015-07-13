app.service('PostsService', function ($http) {

    this.getPosts = function () {
        return $http.get('/api/posts');
    }

    this.savePost = function (post) {
        return $http.post('/api/posts', post);
    }

});