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


    /* Sign up */

    function clearUser() {
        var fields = ['firstname', 'lastname', 'email', 'username', 'password']
        for (const field of fields) {
            resetVal(field);
        }
    }

    $scope.users = [{
        firstname: 'Emin',
        lastname: 'Sahat',
        email: 'eminfb@live.com',
        username: 'sahaa46',
        password: '1234'
    }];

    $scope.newUser = {};


    $scope.addUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        console.log($scope.users);

    }

    $scope.selectUser = function (user) {
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.deleteUser = function () {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    };

    $scope.check = function () {
        if (attr.required && ctrl.$isEmpty(value)) {
            ctrl.$setValidity('required', false);
            return;
        } else {
            ctrl.$setValidity('required', true);
            return value;
        }
    }
});

