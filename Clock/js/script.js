/* var allmeals = [];

function addMeals() {
    var meals = {
        name: getVal('name'),
        description: getVal('description'),
        price: getVal('price'),
        img: getVal('img'),
        show: function() {
            return `

            `
        }
    };
    allmeals.push(meals);
    console.log(allmeals);
    showMeals();
    transfer()
}

function getVal(id) {
    return document.getElementById(id).value;
}

function clearAll() {
    var fields = ['name', 'description', 'price', 'img']
    for (const field of fields) {
        resetVal(field);
    }

}

function resetVal(id) {
    return document.getElementById(id).value = '';
}

function hideMeals() {
    var hidemeals = document.getElementById('form')
    hidemeals.style.display = 'none';
}

function showMeals() {
    var showmeals = document.getElementById('form2');
    showmeals.style.display = 'display'
}

function transfer() {
    for (var i = 0; i < allmeals.length; i++) {
        var res = document.getElementById('  ')
        
    }
}
*/

function brojcanik(id) {
    var sviSegmenti = [];
    var clock = document.getElementById(id);
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    for (var i = 1; i < 8; i++) {
        var segment = document.createElement('div');
        segment.className = 'segment ugasen s' + i;
        wrapper.appendChild(segment);
        sviSegmenti.push(segment)
    }
    clock.appendChild(wrapper);

    function ukljuci(segment) {
        segment.classList.remove('ugasen')
    }

    function postaviVrijeme(broj) {
        for (let i = 0; i < sviSegmenti.length; i++) {
            sviSegmenti[i].classList.add('ugasen')
        }
        switch (broj) {
            case 0:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 1:
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[6]);
                break;
            case 2:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                break;
            case 3:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 4:
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[6]);
                break;
            case 5:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 6:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 7:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[6]);
                break;
            case 8:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[4]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
            case 9:
                ukljuci(sviSegmenti[0]);
                ukljuci(sviSegmenti[1]);
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[3]);
                ukljuci(sviSegmenti[5]);
                ukljuci(sviSegmenti[6]);
                break;
        }
    }
    return {
        setTime: postaviVrijeme
    }
}

var date = new Date();
var sati = date.getHours().toString().split('');
var min = date.getMinutes().toString().split('');

var br1 = brojcanik('clock');
br1.setTime(+sati[0]);
var br2 = brojcanik('clock');
br2.setTime(+sati[1]);

var min1 = brojcanik('clock');
min1.setTime(+min[0]);
var min2 = brojcanik('clock');
min2.setTime(+min[1]);

var sec1 = brojcanik('clock');
var sec2 = brojcanik('clock');

setInterval(function () {
    var sec = new Date().getSeconds().toString().split('');
    sec1.setTime(+sec[0]);
    sec2.setTime(+sec[1]);
}, 100)




