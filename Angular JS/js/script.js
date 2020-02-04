/*
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
*/

/*
var app = angular.module('myApp', [])
    .controller('controller', function ($scope) {
        $scope.user = {
            name: 'Emin',
            lastname: 'Sahat',
            adresa: 'Velesici 156',
            godine: '22',
            img: "https://s5.pik.ba/galerija/2019-10/25/11/slika-133542-5db3628189009-default.jpg"
        }
    });
*/

/*
var app = angular.module('myApp', [])
    .controller('controller', function ($scope) {

        $scope.users = [
            { id: 1, name: 'Emin' },
            { id: 2, name: 'Haris' },
            { id: 3, name: 'Amir' }
        ];

        $scope.blogs = [
            {
                name: 'Prvi AngularJS Blog',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia repellendus reprehenderit similique ipsa accusantium autem doloremque aut vel, maiores amet quod nulla consequuntur aspernatur inventore non adipisci earum dolores.',
                comments: ['Ovaj blog je pravo dobar', 'Meni se svidja']
            },
            {
                name: 'Drugi AngularJS Blog',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia repellendus reprehenderit similique ipsa accusantium autem doloremque aut vel, maiores amet quod nulla consequuntur aspernatur inventore non adipisci earum dolores.'
            },
            {
                name: 'Treci AngularJS Blog',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia repellendus reprehenderit similique ipsa accusantium autem doloremque aut vel, maiores amet quod nulla consequuntur aspernatur inventore non adipisci earum dolores.'
            }
        ];

        $scope.deleteBlog = function(index) {
            console.log('Delete', index);
            $scope.blogs.splice(index, 1);
        }

        $scope.updateBlog = function(blog) {
            console.log('Update', blog);
        }
    
*/


/* LIKE DISLIKE */

/*
var app = angular.module('myApp', [])
    .controller('controller', function ($scope) {



        $scope.langs = [
            { name: "C", datum: new Date(), price: 1000, likes: 0, dislikes: 0, },
            { name: "PHP", datum: new Date(), price: 340, likes: 0, dislikes: 0 },
            { name: "Python", datum: new Date(), price: 1567, likes: 0, dislikes: 0 },
            { name: "Javascript", datum: new Date(), price: 1780, likes: 0, dislikes: 0 }
        ];
        $scope.like = function (lang) {

            lang.likes++;
        }
        $scope.dislike = function (lang) {
            lang.dislikes++;
        }
    });
*/


/* Heros */

/*
var app = angular.module("myApp", []);
app.controller("controller", function ($scope) {
    $scope.heros = ["Magneta", "Bombosta", "Celerios", "Rania"];
    $scope.addHero = function () {
        $scope.heros.push($scope.addNew);
    }
    $scope.removeHero = function (item) {
        var index = $scope.heros.indexOf(item);
        $scope.heros.splice(index, 1);
    }
});
*/


var app = angular.module("myApp", []);
app.controller("controller", function ($scope) {

    $scope.folder = {
        naziv: 'angular-tour-of-heroes',
        isCollapsed = false,
        children: [
            { naziv: 'e2e' },
            { naziv: 'node_modules' },
            {
                naziv: 'src',
                children: [
                    {
                        naziv: 'app',
                        children: [
                            {
                                naziv: 'heroes',
                                children: [
                                    { naziv: 'heroes.component.css' },
                                    { naziv: 'heroes.component.html' },
                                    { naziv: 'heroes.component.spec.ts' },
                                    { naziv: 'heroes.component.ts' },
                                ]
                            },
                            { naziv: 'app.component.css' },
                            { naziv: 'app.component.html' },
                            { naziv: 'app.component.spec.ts' },
                            { naziv: 'app.component.ts' },
                            { naziv: 'app.module.ts' },
                        ]
                    }
                ]
            }
        ]
    };

$scope.collapse = function (folder) {
    folder.isCollapsed = !folder.isCollapsed;
}


});





