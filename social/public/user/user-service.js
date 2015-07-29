app.service('UserService', function ($http) {

    var service = this;

    service.login = function (username, password) {
        return $http.post('/api/sessions', {
            username: username,
            password: password
        }).then(function (val) {
            service.token = val.data;
            $http.defaults.headers.common['X-Auth'] = val.data;
            return service.getUser();
        })
    }

    service.logout = function(){
        $http.defaults.headers.common['X-Auth'] = "";
    }

    service.getUser = function () {
        return $http.get('/api/users');
    }

    service.createUser = function (user) {
        return $http.post('api/users', user);
    }

});