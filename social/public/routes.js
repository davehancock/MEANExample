angular.module('social').config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'PostsCtrl',
            templateUrl: './posts/posts.html'
        })
        .when('/register', {
            controller: 'RegisterCtrl',
            templateUrl: './register/register.html'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: './login/login.html'
        });

    $locationProvider.html5Mode(true);

});