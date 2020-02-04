var app = angular.module("myApp", []);
app.controller("MainCtrl", function ($scope) {
    $scope.products = ["Galaxy S10", "Galaxy S10e", "Galaxy S10 Plus"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
});

