app.factory('loginService', function () {

    var users = [];

    function isLogged(username, pass) {
        if (username === 'admin' && pass === 123) {
            return true;
        }
        return false;
    }
    function add(user) {
        users.push(user);
    }
    function getAll() {
        return users;
    }

    return {
        checkLogin: isLogged,
        insert: add,
        findAll: getAll
    }
});