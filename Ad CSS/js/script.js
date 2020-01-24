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


/* Sign up */


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
    confirm('Continue?');
    hideSignUp();
    showLogin();
}


function validate() {
    for (var i = 0; i < users.length; i++) {
        var emailValue = document.getElementById('email').value;
        var passValue = document.getElementById('password').value;

        if ((emailValue == users[i].email1 || emailValue == users[i].username) && passValue == users[i].password1) {
            hideLogin();
            showH1();
            showLogout();
            hideSignUpAgain();
            showUserInfo();
        }
        else if (passValue == users[i].password1) {
            hideErrMsgPw();
            showErrMsgE();
        }
        else if (emailValue == users[i].email1 || emailValue == users[i].username) {
            hideErrMsgE();
            showErrMsgPw();
        }
        else {
            hideErrMsgPw();
            hideErrMsgE();
            showErrMsg();
        }
    }
}

/* Login on Enter functions */

function loginOnEnter(e) {
    if (e.keyCode == 13) {
        validate();
    }
}

function signUpOnEnter(e) {
    if (e.keyCode == 13) {
        signUp();
    }
}

/* Show and hide Login functions */

function showLogin() {
    var showLogin = document.getElementById('form');
    showLogin.style.display = 'block';
}

function hideLogin() {
    var returnLogin = document.getElementById('form');
    returnLogin.style.display = 'none';
}

/* Show  and hide H1 Welcome */

function showH1() {
    var homePage = document.getElementById('hideh1');
    homePage.style.display = 'block';
}

function hideH1() {
    var homePage = document.getElementById('hideh1');
    homePage.style.display = 'none';
}

/* LogOut functions */

function showLogout() {
    var logout = document.getElementById('logout');
    logout.style.display = 'block'
}

function hideLogout() {
    var logout = document.getElementById('logout');
    logout.style.display = 'none'
}

function logout() {
    hideLogout();
    hideH1();
    showLogin();
    showSignUpAgain();
    hideLogout();
    hideUserInfo()
}

/* Show and hide Sign Up functions */

function showSignUp() {
    var showSignUp = document.getElementById('signup');
    showSignUp.style.display = 'block'
}

function hideSignUp() {
    var hideSignUp = document.getElementById('signup');
    hideSignUp.style.display = 'none'
}

/* Sign Up Again functions */

function showSignUpAgain() {
    var signupagain = document.getElementById('signupagain');
    signupagain.style.display = 'block'
}

function hideSignUpAgain() {
    var signupagain = document.getElementById('signupagain');
    signupagain.style.display = 'none'
}

function signUpAgain() {
    hideLogin();
    showSignUp();
    hideSignUpAgain();
}

/* Show User info functions */

function showUserInfo() {
    var nameValue = document.getElementById('name').value;
    var lastNameValue = document.getElementById('lastname').value;

    var userinfo = document.getElementById('userinfo');
    userinfo.innerHTML = nameValue + ' ' + lastNameValue;
}

function hideUserInfo() {
    var hideUserInfo = document.getElementById('userinfo');
    hideUserInfo.style.display = 'none';
}

/* Show and hide Error message functions */

function showErrMsgE() {
    var errMsg = document.getElementById('err-msg-e');
    errMsg.style.display = 'block';
}

function showErrMsgPw() {
    var errMsg = document.getElementById('err-msg-pw');
    errMsg.style.display = 'block';
}

function showErrMsg() {
    var errMsg = document.getElementById('err-msg');
    errMsg.style.display = 'block';
}

function hideErrMsgE() {
    var errMsg = document.getElementById('err-msg-e');
    errMsg.style.display = 'none';
}

function hideErrMsgPw() {
    var errMsg = document.getElementById('err-msg-pw');
    errMsg.style.display = 'none';
}

function hideErrMsg() {
    var errMsg = document.getElementById('err-msg');
    errMsg.style.display = 'none';
}

/* Get Value function */

function getVal(id) {
    return document.getElementById(id).value;
} * /



