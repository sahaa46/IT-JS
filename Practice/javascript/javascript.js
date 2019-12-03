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