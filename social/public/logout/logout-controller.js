app.controller('LogoutModalCtrl', function ($scope, $modalInstance) {

    $scope.logout = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});