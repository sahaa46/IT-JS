// Javascript 1

/*
document.write("ovo je js kod");
console.log("ispis na konzolu")

var numberOne = parseInt(prompt("Unesite prvi broj"));
var numberTwo = parseInt(prompt("Unesite drugi broj"));
var all = numberOne + numberTwo;

console.log("Uneseni brojevi su: "+numberOne, numberTwo)
console.log("Rezultat dva broja je: "+all);
*/

// Javascript 2

/*
var text = "Danas je lijep dan";
console.log(typeof text);

var text;
text= "Danas je lijep dan";
console.log(typeof text);

var a = true;
var b = false;
var c = a && b;
var d = a || b;
var e = !a;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/

var a = 19;
var b = 46;

function checkEqual(param1, param2) {
    document.write("Uneseni parametri su: " + param1 + " i " + param2);
    document.write("<br>")
    if(param1 === 19 && param2 === 46) {
        document.write("Sarajevo sampion")
    }
    else {
        document.write("Nothing")
    }
}
checkEqual(19, 46);


