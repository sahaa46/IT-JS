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


/*
var niz = [];
var name1 = {
    ime:'Emin',
    prezime:'Sahat',
    adresa:{}
};

niz.push(name1);

console.log(name1.ime);
console.log(niz);
console.log(niz[0].ime);
console.log(niz[0] ['ime']);
*/


/*
var str = "Emin";
var niz = str.split("-");
var ime = "EMIN";
var ime = "Emi_N";
var naziv = ime.replace("_","")
var ime = "EM i_n";
console.log(ime.charAt(3));
*/


/*
var niz = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < niz.length ;i++) {
    console.log(niz[i]);
}
*/


/*
var unos = prompt("Unesite niz");
var niz = unos.split(',');

function saberi(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res = res + parseInt(arr[i]);
    }
    return res;
}

var rezultat = saberi(niz);
console.log(rezultat);
*/


/*
var niz1 = [1, 2, 3, 4, 5, 6];
var niz2 = [7, 8, 9, 10, 11, 12];

function saberi(arr1, arr2) {
    var res = [];
    for (var i = 0; i < arr1.length; i++) {
        res[i] = arr1[i] + arr2[i];
    }
    return res;
}
var res = saberi(niz1, niz2);
console.log(res);
*/


/*
var str = "RIMAC";

function transform(a1) {
    return a1.split('').sort().join('');
}

var res = transform(str);
console.log(res)
*/


/*
var arr = [1, 4, 56, -34, -9, 10, 4, 1, 67, -2];

function dupli(niz) {
    var duplicate = [];
    var original = [];
    for (var i = 0; i < niz.length; i++) {
        if (!original.includes(niz[i])) {
            original.push(niz[i]);
        }
        else {
            duplicate.push(niz[i]);
        }
    }
    return {d:duplicate,o:original};
}
var res = dupli(arr);
console.log(res);


function negativniBrojevi(niz) {
    var neg = [];
    for (i = 0; i < niz.length; i++) {
        if (niz[i] < 0) {
            neg.push(niz[i])
        }
    }
    return neg;
}

console.log(negativniBrojevi(arr));
*/


/*
var s1 = "Hello World";
var s2 = "From JavaScript";
var s3 = s1.concat(s2);

function transformStr(s) {

    for (var i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            document.write("<span style = 'color:red'>" + s3[i] + "</span>");
        }
        else {
            document.write("<span style = 'color:white'>" + s3[i] + "</span>");
        }
    }
}

transformStr(s3);
*/


/*
var niz = [245, 56, 67, 92, 345, "Amir", true];

function calculate(niz) {
    return niz[Math.floor(Math.random() * niz.length)];
}

var res = calculate(niz);
console.log(res);
*/


/*
var bubanj = [12, 334, 35, 123, 67, 87];

while (true) {
    var unos = parseInt(prompt("Unesi broj ili prekini igru, prekid 5"));
    if (unos == 5) {
        break;
    }
    else if (bubanj.includes(unos)) {
        alert("Osvojili ste bingo!")
    }
    else {
        alert("Zao nam je")
    }
}
*/


/*
var height = parseInt(prompt("Unesi visinu"));
var width = parseInt(prompt("Unesi sirinu"));
var tacke = [[2, 7], [3, 6], [1, 8]];

function printMatrix(h, w, tacke) {
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var exists = false;
            for (var p = 0; p < tacke.length; p++) {
                if (tacke[p][0] === y && tacke[p][1] === x) {
                    exists = true;
                    document.write("0");
                }
            }
            if (!exists)
                document.write("X");
        }
        document.write("<br>");
    }
}

printMatrix(height, width, tacke);
*/


/*
var div = document.getElementById("console");
div.innerHTML = "Good";
console.log(div.innerHTML);
*/

/*
var nizDivova = document.getElementsByTagName("div");
nizDivova[0].innerHTML = "Good";
nizDivova[2].innerHTML = "Good";
console.log(nizDivova);
*/

/*
var nizInputa = document.getElementsByName("Ime");
nizInputa[0].value = "Good";
console.log(nizInputa[0].value);
*/

/*
var nizDivova = document.getElementsByClassName("console");
console.log(nizDivova);
*/


/*
var language = "bs_bs";
var locales = {
    "en_us": {
        hello: "Hello",
        welcome: "Welcome to our page",
        how_are_you: "How are you today?",
        msg: "New div"
    },
    "sr_rs": {
        hello: "Dobar dan",
        welcome: "Dobro dosli na nasu stranicu",
        how_are_you: "Kako ste danas?",
        msg: "Novi div"
    },
    "bs_bs": {
        hello: "Dobar dan",
        welcome: "Dobro dosli na nasu stranicu",
        how_are_you: "Kako ste danas?",
        msg: "Novi div"
    }
};

function translate(lang) {
    var nizDivova = document.getElementsByTagName("div");
    for (var i = 0; i < nizDivova.length; i++) {
        nizDivova[i].innerHTML = locales[lang][nizDivova[i].innerHTML];
    }

}

translate(language);
*/


/*
var div = document.createElement('div')
div.innerHTML = "Saha";

var h2 = document.createElement('h2');
h2.innerHTML = "Emin";


document.body.appendChild(div)
div.appendChild(h2);
*/


/*
var images = ['https://www.opel-accessories.com/app_get/getImage?image_id=ASOPCL075_E02_001_SIZE4&app_name=ace_gme&width=-1&height=-1',
    'https://www.jutarnji.hr/migration_catalog/astrag/647692/ALTERNATES/LANDSCAPE_680/astrag',
    'https://printcarposter.com/images/519149-big.jpg'];
var image = document.createElement('img');
document.body.appendChild(image)

var counter = 0;

setInterval(function () {
    image.src = images[counter]
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }


}, 3000);
*/









