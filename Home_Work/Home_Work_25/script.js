// Array
let colors = ["Red", "White", "Green"];
let cars = ["BMW", "Opel", "Ferrary"];
let autors = ["Pushkin", "Gogol", "Kvitka"];
let сountries = ["Ukraine", "Belarus", "USA"];
let languages = ["English", "Spanish", "Ukrainian"];
let games = ["Footbal", "Golf", "Basketball"];
let surName = ["Ivanov", "Petrov", "Lodaberg"];

// 1
function clickShow1() {
    let textShow1 = document.querySelector('.textShow1');
    for (let i of colors) { textShow1.innerHTML += i + " " };
    for (let i of cars) { textShow1.innerHTML += i + " " };
    for (let i of autors) { textShow1.innerHTML += i + " " };
    for (let i of сountries) { textShow1.innerHTML += i + " " };
    for (let i of languages) { textShow1.innerHTML += i + " " };
}

// 2
function clickShow2() {
    let textShow2 = document.querySelector('.textShow2');
    for (let i in colors) { textShow2.innerHTML += i + " " + colors[i] + " " };
    for (let i in cars) { textShow2.innerHTML += i + " " + cars[i] + " " };
    for (let i in autors) { textShow2.innerHTML += i + " " + autors[i] + " " };
    for (let i in сountries) { textShow2.innerHTML += i + " " + countries[i] + " " };
    for (let i in languages) { textShow2.innerHTML += i + " " + languages[i] + " " };
}

// 3
function clickShow3() {
    let textShow3 = document.querySelector('.textShow3');
    let j;

    for (let i in colors) {
        j = i;
        j++;
    };
    textShow3.innerHTML += j + " ";
    for (let i in cars) {
        j = i;
        j++;
    };
    textShow3.innerHTML += j + " ";
    for (let i in autors) {
        j = i;
        j++;
    };
    textShow3.innerHTML += j + " ";
    for (let i in сountries) {
        j = i;
        j++;
    };
    textShow3.innerHTML += j + " ";
    for (let i in languages) {
        j = i;
        j++;
    };
    textShow3.innerHTML += j + " ";
}




