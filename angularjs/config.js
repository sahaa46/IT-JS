app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginController'
        })
        .when('/productAdmin', {
            templateUrl: 'products/productAdmin.html',
            controller: 'adminController'
        })
        .otherwise({
            template: '<h1>Not Found</h1>'
        });
});