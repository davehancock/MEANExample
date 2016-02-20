app.controller('RegisterCtrl', function ($scope, UserService) {

    $scope.createUser = function (username, password) {

        var user = {
            username: username,
            password: password
        };

        UserService.createUser(user)
            .then(function (response) {
                UserService.login(response.data.username, password).then(function (response) {
                    $scope.$emit('login', response.data);
                });
            });
    }

});