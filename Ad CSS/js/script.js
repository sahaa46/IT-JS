/*
function changeColor(id) {
    var boja = document.getElementById('color').value;
    console.log(boja);
    var element = document.getElementById(id);
    element.style.backgroundColor = boja;
}
*/


/*
function reverse() {
    var color1 = window.getComputedStyle(box1, null).backgroundColor;
    var first = document.getElementById("box1");
    console.log(color1);

    var color2 = window.getComputedStyle(box2, null).backgroundColor;
    var second = document.getElementById("box2");
    console.log(color2);

    first.style.backgroundColor = color2;
    second.style.backgroundColor = color1;
}
*/


/*
var boje = []

var kockica = {
    brojStrana: 6,
    boje: ['red', 'blue', 'black', 'white', 'green', 'gray']
    baci: function () {
        var display = document.getElementById('display');
        var randomNum = Math.floor(Math.random() * kockica.brojStrana) + 1;
        display.innerHTML = randomNum;
        kockica.promjeniBoju(randomNum);
    },
    promjeniBoju: function (index) {
        console.log('koc');
        var display = document.getElementById('kockica');
        display.style.backgroundColor = kockica.boje[index]
    }
};

kockica.baci();
*/



/*
function clearForm() {
    document.getElementById('signup1').reset();
}
*/

var users = [];

function signUp() {
    var user = {
        name: getVal('name'),
        lastname: getVal('lastname'),
        email1: getVal('email1'),
        password1: getVal('password1'),
        username: getVal('username'),
        img: getVal('img')
    };
    users.push(user);
    console.log(users);
    confirm('Continue?')
    var hideSignUp = document.getElementById('signup');
    hideSignUp.style.display = 'none'
    var returnLogin = document.getElementById('form');
    returnLogin.style.display = 'block';
}


function getVal(id) {
    return document.getElementById(id).value;
}


function validate() {
    for (var i = 0; i < users.length; i++) {
        var emailValue = document.getElementById('email').value;
        var passValue = document.getElementById('password').value;

        if (emailValue == users[i].email1 && passValue == users[i].password1) {
            var loginform = document.getElementById('form');
            loginform.style.display = 'none';
            var homePage = document.getElementById('hideh1');
            homePage.style.display = 'block';
            console.log('Welcome!');
        }
        else {
            var errMsg = document.getElementById('err-msg');
            errMsg.style.display = 'block';
            console.log('Wrong email/pw');
        }
    }
}

function loginOnEnter(e) {
    if (e.keyCode == 13) {
        validate();
    }
}

function showLogin() {
    var showLogin = document.getElementById('form');
    showLogin.style.dispaly = 'block';
}

function logout() {
    var homePage = document.getElementById('hideh1');
    homePage.style.display = 'none';
    showLogin();
}



