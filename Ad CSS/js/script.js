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
    promjeniBoju:function (index) {
        console.log('koc');
        var display = document.getElementById('kockica');
        display.style.backgroundColor = kockica.boje[index]
    }
};

kockica.baci();