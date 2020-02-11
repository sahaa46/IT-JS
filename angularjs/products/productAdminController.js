(function () {


    var adminModule = angular.module('adminModule', []);
    adminModule.controller('adminController', function (loginService) {
        console.log(loginService.findAll());

    });

})();