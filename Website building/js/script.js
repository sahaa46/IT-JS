var id = 0;
var cars = [];

function saveCar() {
    var car = {
        id: setId(),
        manufacture: getVal('manufacture'),
        model: getVal('model'),
        price: getVal('price'),
        year: getVal('year'),
        fuel: getVal('fuel'),
        condition: getVal('condition'),
        image: getVal('image')
    };
    console.log(car);
    cars.push(car);
}


function getVal(id) {
    return document.getElementById(id).value;
}

function clearForm() {
    var fields = ['manufacture', 'model', 'price', 'year', 'fuel', 'condition', 'image']
    for (const field of fields) {
        resetVal(field);
    }

}

function resetVal(id) {
    document.getElementById(id).value = '';
}

function setId() {
    return ++id;
}

function toHTML() {
    for (var i = 0; i < cars.length; i++) {
        var res = document.getElementById('main')
        var div1 = document.createElement('div');
        document.body.appendChild(div1);
        div1.innerHTML = cars[i].manufacture;
        var h3 = document.createElement('h3');
        div1.appendChild(h3);
        h3.innerHTML = cars[i].model;
        res.appendChild(div1)

    }

}