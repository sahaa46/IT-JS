
function Person(ime, prezime) {
    this.firstName = ime;
    this.lastName = prezime;
    this.fullName = function (osoba) {
        console.log(this.firstName + ' ' + this.lastName + ' pozdravlja: ' + osoba.firstName + " " + osoba.lastName);

    }
}