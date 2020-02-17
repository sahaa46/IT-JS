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
        if ($scope.addIt == 'S8') {
            $scope.phones.push($scope.addIt)
        }
        else {
            alert('Wrong')
        }
    }

    $scope.phones2 = [];
    $scope.checkPhones2 = function () {
        if ($scope.addIt2 == 'S10') {
            $scope.phones2.push($scope.addIt2)
        }
        else {
            alert('Wrong')
        }
    }
    /*
    $scope.obj.push($scope.userFirstname);
    $scope.users.push($scope.userLastname);
    $scope.users.push($scope.userEmail);
    $scope.users.push($scope.userUsername);
*/
    $scope.users = [];
    $scope.addUser = function () {
        for (var i = 0; i < 10; i++) {
            users.push({
                'firstname': '$scope.userFirstname'
            });
            console.log(JSON.stringify(users));
        };

    }

    /* Edit me */

    $scope.showtooltip = false;
    $scope.value = 'Edit me.';

    $scope.hideTooltip = function () {
        $scope.showtooltip = false;
    }

    $scope.toggleTooltip = function (e) {
        e.stopPropagation();
        $scope.showtooltip = !$scope.showtooltip;
    }
});

