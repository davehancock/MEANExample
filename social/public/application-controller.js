app.controller('ApplicationCtrl', function ($scope, UserService, $modal, $log) {

    $scope.$on('login', function (_, user) {
        $scope.currentUser = user;
    })

    $scope.logout = function () {

        var modalInstance = $modal.open({
            templateUrl: 'logout/logout-modal.html',
            controller: 'LogoutModalCtrl',
        });

        modalInstance.result.then(function (doLogout) {
            UserService.logout();
            $scope.currentUser = null;
        }, function () {
            $log.info('modal dismissed at: ' + new Date());
        });

    };

});



