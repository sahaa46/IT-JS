var app = angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.names = [
            'Emin', 'Sahat'
        ];
    });