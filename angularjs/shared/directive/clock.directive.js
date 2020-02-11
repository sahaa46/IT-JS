app.directive('agSat', function ($interval) {
    return {
        restrict: 'AE',
        template: 'This is clock directive {{time}} for user {{aguser}}',
        scope: {
            aguser: '=user'
        },
        link: function (scope, el, attr) {
            $interval(function () {
                scope.time = new Date().toLocaleTimeString();
            }, 100);
        }
    }
});