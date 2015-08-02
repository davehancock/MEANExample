app.service('UserService', function ($http) {

    var service = this;

    service.login = function (username, password) {
        return $http.post('/api/sessions', {
            username: username,
            password: password
        }).then(function (response) {
            window.localStorage.setItem('token', response.data);
            return service.getUser();
        })
    }

    service.logout = function () {
        $http.defaults.headers.common['X-Auth'] = "";
        window.localStorage.clear();
    }

    service.getUser = function () {
        $http.defaults.headers.common['X-Auth'] = window.localStorage.getItem('token');
        return $http.get('/api/users');
    }

    service.createUser = function (user) {
        return $http.post('api/users', user);
    }

});