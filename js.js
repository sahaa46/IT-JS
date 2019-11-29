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


/*
var a = 19;
var b = 46;

function checkEqual(param1, param2) {
    document.write("Uneseni parametri su: " + param1 + " i " + param2);
    document.write("<br>")
    if (param1 === 19 && param2 === 46) {
        document.write("Sarajevo sampion")
    }
    else {
        document.write("Nothing")
    }
}
checkEqual(19, 46);
*/


/*
var a = 100;
var b = 100;

function checkEqual(param1, param2) {
    var isEqual = param1 == param2;
    document.write("Uneseni parametri su: " + param1 + " i " + param2);
    document.write("<br>Uneseni brojevi su jednaki: " + isEqual);
}

checkEqual(100, 100);
*/


/*
var number1 = prompt("Enter first number");
var number2 = prompt("Enter second number");

function checkEqual(param1, param2) {
    document.write("Uneseni parametri su: " + param1 + " i " + param2);
    return param1 == param2;
}

var result = checkEqual(number1, number2);

document.write("<br>Uneseni brojevi su jednaki: " + result);
*/


/*
var number = prompt("Enter number: ");

if (number > 5) {
    alert("Broj je veci od 5");
}
else if (number == 5) {
    alert("Broj je jednak 5")
}
else {
    alert("Broj je manji od 5");
}
*/


// Javascript 3


/*
var dan = prompt("Da li je dan");

if (dan == "da") {
    alert("Dobar dan");
}
else if (dan == "ne") {
    alert("Dobro vece");
}
else  if{
    alert("Da ili ne?")
}
*/


/*
var dan = confirm("Da li je dan?");

if (dan) {
    document.write("Dobar dan");
}
else {
    document.write("Dobro vece");
}
*/

/*
var dan = );

alert(confirm("Da li je dan?"?"Dobar dan":"Dobro vece");
*/


/*
var a = parseInt(prompt("Unesi prvi broj: "));
var b = parseInt(prompt("Unesi drugi broj: "));
var result = prompt("Unesi operand: ");

function logical(a, b) {

    switch (result) {
        case "+":
            document.write(result = a + b);
            break;
        case "-":
            document.write(result = a - b);
            break;
        case "/":
            document.write(result = a / b);
            break;
        case "*":
            document.write(result = a * b);
            break;
        default:
            alert("Uneseni operand ne postoji");
    }
}

logical(a, b)
*/


/*
var operand1 = parseInt(prompt("Unesite prvi broj"));
var operand2 = parseInt(prompt("Unesite drugi broj"));
var operacija = prompt("Unesite operaciju");

function izvrsiOperaciju(op1, op2, op) {
    switch (op) {
        case "+":
            alert(op1 + op2)
            break;
        case "-":
            alert(op1 - op2)
            break;
        case "/":
            alert(op1 / op2)
            break;
        case "*":
            alert(op1 * op2)
            break;
        default:
            alert("Operacija koju ste unijeli nije podrzana")
            break;
    }
}
izvrsiOperaciju(operand1, operand2, operacija)
*/


// const date1 = new Date;
// console.log(new Date);

/*
var date = new Date();
var trSat = date.getHours();

function whatTime(trenutniSat){
    if (trenutniSat < 10) {
        alert("Dobro jutro");
    }
    else if (trenutniSat > 10 && trenutniSat < 17) {
        alert("Dobar dan");
    }
    else {
        alert("Dobro vece");
    }
}
whatTime(16);
*/


/*
var km = parseInt(prompt("Unesi iznos u KM"));
var valuta = prompt("Unesite valutu");

function calculate(km, valuta) {
    switch (valuta) {
        case "eu":
            alert(valuta = km * 0.51 + " EU");
            break;
        case "kn":
            alert(valuta = km * 3.80 + " KN");
            break;
        case "usd":
            alert(valuta = km * 0.56 + " USD");
            break;
    }
}
calculate(km, valuta);
*/


// NIZOVI  - overapi.com

// var niz = [1, 2, true, "Saha", 3, [10, 12, ["niz u nizu nad nizovima"[[]]], 15]];
//var drugiClan = niz[2][1];
// niz[niz.length] = 4;
// niz.push(19, 46);
// var index = niz.indexOf("Saha");
// var index1 = niz.includes("Saha");

// Brisanje elementa iz niza 
// niz.splice(index, 1);

// Dodavanje oduzimanje
// niz.unshift("Saha");
// niz.shift("Saha");


// console.log(niz);
// console.log(niz.length);
// console.log(drugiClan);
// console.log(niz.pop());
// console.log(index);
// console.log(index1);
// console.log(niz.sort());

/*
var kurs = {EU: 1.95583, HRK: 4, GBP:2.2, USD: 1.699};
var valute = Object.keys(kurs);

var iznos = parseInt(prompt("Unesite iznos"));
var unesenaValuta = prompt("Unesite valutu");

if (valute.includes(unesenaValuta)) {
    var kursnaVrijednost = kurs[unesenaValuta];
    var res = iznos+kursnaVrijednost;
    alert("Vrijednost je: " + res + " " +unesenaValuta)
}

console.log(valute);
*/