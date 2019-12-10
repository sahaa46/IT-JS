/*
var number1 = parseInt(prompt("Unesite broj 1"));
var number2 = parseInt(prompt("Unesite broj 2"));

if (number1 > number2) {
    alert("Broj 1 je veci od broja 2");
}
else if (number1 < number2) {
    alert("Broj 1 je manji od broja 2");
}
else {
    alert("Pogresno!")
}
*/

// setTimeout funkcija, izbrojavanje

/*
var callback = function() {
    alert("Done!");
}

setTimeout(callback, 5000);


setTimeout(function(){
    alert("Done!");
}, 5000);
*/

/*
var km = parseInt(prompt("Unesi cifru u KM-ovima"));
var valuta = prompt("Unesi zeljenu valutu");

function calculate(km, valuta) {
    switch (valuta) {
        case "eur":
            alert(valuta = km + " KM" + " je " + km * 0.51 + " eura.");
            break;
        case "kuna":
            alert(valuta = km + " KM" + " je " + km * 3.8 + " kuna.");
            break;
        default: alert("Neispravan unos!");
    }
}
calculate(km, valuta);
*/


/*
alert("Pogodimo drzavu iz koje dolazite!");
var city = prompt("Glavni grad vase drzave?");

function country(city) {
    switch (city) {
        case "Sarajevo":
            return (alert("Dolazite iz Bosne i Hercegovine!"));
            break;
        case "Beograd":
            return (alert("Dolazite iz Srbije!"));
            break;
        case "Zagreb":
            return (alert("Dolazite iz Hrvatske!"));
            break;
        default: alert("Pokusajte ponovo!");
    }
}
country(city);
*/


// Izracunaj godine
/*
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

alert(getAge("6/9/1997"));
*/


/*
var date = new Date();
var year = date.getFullYear();
var now = parseInt(prompt("Koje godine ste rodjeni?"));


function howMuch(year) {
    if (now < year) {
        alert("Imate " + (year - now) + " godine.")
    }
    else {
        alert("Neispravan unos!")
    }
}
howMuch(year);

if (now <= 2001) {
    alert("Punoljetni ste!");
}
else {
    alert("Niste punoljetni!");
}
*/


/*
var niz = [1, 2, 3, 4, true, false];
res = parseInt(confirm(niz))

if (niz.length >= 5) {
    alert("Vas niz ima 5 ili vise elemenata")
}
else {
    alert("Vas niz ima manje od 5 elemenata")
}
*/


/*
var name1 = ["Emin","Sahat","1997"];

document.write("Ime: ");
document.write(name1[0]);
document.write("<br />");
document.write("Prezime: ");
document.write(name1[1]);
document.write("<br />");
document.write("Godiste: ");
document.write(name1[2]);
document.write("<br />");
*/


/*
var movies = [
    ["In Theaters", "https://www.imdb.com/movies-in-theaters/"],
    ["Comming Soon", "https://www.imdb.com/movies-coming-soon/"],
    ["Top Movies", "https://www.imdb.com/chart/top/"],
    ["Showtimes & Tickets", "https://www.imdb.com/showtimes/location"],
    ["Trailers", "https://www.imdb.com/trailers/"]
];

for(var i=0;i<movies.length;i++){
    document.write("<li style='font-family: verdana; font-size:0.7em; margin-bottom:4px;'>");
    document.write("a href=' "+movies[i][1]+"'>"+movies[i][0]+"</a>");
    document.write("</li>");
}
*/


/*
var s1 = "Hello World";
var s2 = "From JavaScript";
var s3 = s1 + s2;

for (var i = 0; i < s3.length; i++) {
document.write("<span style='color:" + ((!(i % 2)) ? "red" : "black") + "'>" + s3[i] + "</span>");
}
 */


/*
var s1 = "Hello World";
var s2 = "From JavaScript";
var s3 = s1.concat(s2);
for(var i=0;i<s3.length;i++){
    if(i%2===0){
        document.write("<span style='color:red;'>"+s3[i]+"</span>");
    } else {
        document.write("<span style='color:black;'>"+s3[i]+"</span>");
    }
}
*/


/*
var unos = prompt("Unesite niz: ");
var niz = unos.split(',');

function saberi(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
    res = res + parseInt(arr[i]);
    }
    return res;
}

var rezultat = saberi(niz);
alert(rezultat);
*/


/*
var niz1 = [1, 2, 3, 4, 5, 6];
var niz2 = [7, 8, 9, 10, 11, 12];

function clanovi(arr1, arr2) {
    var niz = [];
    for (var i = 0; i < arr1.length; i++) {
        niz[i] = arr1[i] + arr2[i];
    }
    return niz;
}

var res = clanovi(niz1, niz2);
alert(res);
*/


/*
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;
*/


/*
var is_Array = function(input) {
    if (toString.call(input) === "[object Array]")
    return true;
    return false;
};
console.log(is_Array('Saha'));
console.log(is_Array([1,2,3]));
*/


/*
var array_Clone = function(arr1) {
    return arr1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
*/


/*
var myColor = ["Red","Green","White","Black"];

function string(str) {
    for (i = 0; i < str.length; i++){
        var str1 = myColor.toString();
        console.log(str1);
        console.log(str.join('+'));
        break;
    }
};
string(myColor)
*/


/*
var enterNum = prompt("Enter numbers as strings");
var entered = enterNum.split(',');

function calculate(num) {
    var res = 0;
    for (var i = 0; i < num.length; i++) {
        res = res + parseInt(num[i]);
    }
    return res;
}
var res1 = calculate(entered);
alert(res1);
*/


/*
function FirstFactorial(num) {

    // code goes here
    var num = 4;
    for (var i = 0; i < num.length; i++){
      num = num * num-- * num--
    }
    return num;

  }

  // keep this function call here
  console.log(FirstFactorial(readline()));
*/


/*
var people = ["Greg", "Mary", "Devon", "James"];

for (i = 0; i < people.length; i++) {
    if (i > 1) {
        break;
    }
    console.log(people[i]);
};
console.log("");

for (i = 0; i < people.length; i++) {
    console.log(people[i]);

};
console.log(people.shift("Greg"));
console.log(people);
console.log(people.shift("James"));
console.log(people);
console.log(people.unshift("Matt"));
console.log(people);
console.log(people.push("Emin"));
console.log(people);
console.log(people.slice(1));
console.log(people.push("Mary"));
console.log(people);
console.log("");
console.log(people.indexOf("Mary"));
console.log(people.join());
console.log(people.splice(3, 0, "Saha"));
console.log(people);
*/


/*
var obj = {
    firstName : "Emin",
    lastName : "Sahat",
    occupation : "IT"
}

console.log(obj.firstName);
console.log(obj["lastName"]);
console.log(obj["occupation"]);

delete obj.occupation;
obj.hobby = "Footbal";
console.log(obj.hobby);
console.log(obj.occupation);
*/


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* 
function displayOddNumbers(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            console.log(num[i]);
        }
    }
}

displayOddNumbers(numbers);
*/


/*
function returnEvenNumbers() {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}
returnEvenNumbers();
*/


/*
function returnFirstOddNumber(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            console.log(num[i, 0])
        }
    }
}
returnFirstOddNumber(numbers);
*/


/*
function returnFirstEvenNumber(){
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            // print out that value!
            return numbers[i];
        }
    }
}
*/


/*
function returnFirstHalf(){
    return numbers.slice(0,numbers.length/2);
}
var res= returnFirstHalf(numbers);
console.log(res);
*/


/*
function returnSecondHalf  () {
    return numbers.slice(numbers.length/2);
}
var res = returnSecondHalf(numbers);
console.log(res);
*/


/*
function add (a, b) {
    console.log(a + b);
    
}
add(2, 2);
*/


/*
var myName = "Emin";
function sayHello(arr) {
    if (arr === myName) {
        return "Hello Boss";
            return "Hello " + arr;
    }
}
var res = sayHello(myName);
console.log(res);
*/


/*
function average(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total / arr.length;
}
var res = average([1, 2, 3, 4, 5, 6])
console.log(res);
*/


/*
function createStudent(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}
var res = createStudent("Emin", "Sahat");
console.log(res);

var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

function findStudentByFirstName(name){
    var lowerCasedName = name.toLowerCase();
    for(var i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    }
    return false;
}
*/



