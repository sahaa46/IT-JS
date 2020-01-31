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
    wrapper.className = 'first';
    for (var i = 1; i < 8; i++) {
        var segment = document.createElement('div');
        segment.className = 'segment s' + i;
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
            case 1:
                ukljuci(sviSegmenti[2]);
                ukljuci(sviSegmenti[5]);
                break;
        }
    }
    return {
        setTime: postaviVrijeme
    }
}

var br1 = brojcanik('clock');
br1.setTime(1);




