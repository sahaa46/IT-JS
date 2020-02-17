 var allmeals = [];

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




