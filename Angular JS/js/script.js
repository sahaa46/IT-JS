var app = angular.module('myApp', [])
    .controller('kontroler', function ($scope) {
        $scope.user = {
        name: 'Emin',
        lastname: 'Sahat', 
        adresa: 'Bosanska 12',
        slika: 'https://printcarposter.com/images/519149-big.jpg'}
  
            $scope.todo = {};

    $scope.todos = [
        {name: 'Prvi todo'},
        {name: 'Drugi todo'}
    ];

    $scope.addTodo = function() {
        $scope.todos.push($scope.todo)
    }
});