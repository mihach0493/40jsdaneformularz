// console.log('Hello JS');

document.querySelector("button").addEventListener('click', function() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let phone = document.getElementById("phone");
    // let container = document.getElementById("container");

    let imie = document.getElementById('imie');
    let nazwisko = document.getElementById('nazwisko');
    let telefon = document.getElementById('telefon');

    name.innerText = imie.value;
    surname.innerText = nazwisko.value;
    phone.innerText = telefon.value;

})