var app = angular.module("myApp", []);
app.controller("MainCtrl", function ($scope) {
    $scope.users = [
        { user: '' }
    ];

    $scope.getAllUsers = function () {
        return $scope.users.length;
    }

    $scope.addUser = function () {
        $scope.users.push({
            user: $scope.oneUser,
        });
        $scope.oneUser = '';
    };

    $scope.clearSignUp = function () {
        $scope.users = _.filter($scope.users, function (user) {
            return !user.done;
        });
    };

});

