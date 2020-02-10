var app = angular.module("myApp", []);
app.controller("MainCtrl", function ($scope) {
    $scope.products = ["Galaxy S10", "Galaxy S10e", "Galaxy S10 Plus"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }

    $scope.phones = [];
    $scope.checkPhones = function () {
        if ($scope.addIt == 'S8' && $scope.addIt2 == 'S10') {
            $scope.phones.push($scope.addIt && $scope.addIt2);
        }
        else {
            $scope.products.push('GRESKA')
        }
    }
});

