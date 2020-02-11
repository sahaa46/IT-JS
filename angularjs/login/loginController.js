(function () {


    var loginModule = angular.module('loginModule', []);
    loginModule.controller('loginController', function ($scope, loginService) {
        $scope.loggedUser = 'Emin Sahat';

        $scope.isLogged = loginService.checkLogin('admin', 123);

        loginService.insert('Amir Ramic');
    });

})();