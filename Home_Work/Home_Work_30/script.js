// Отловить ошибки на телефон 
// - количество символов ограничить +380989999000
// Ошибки:
// - ввели не число
// - ввели много чисел в номер
// - не ввели номер
// - слишком мало чисел для номера

"use strict"

function myFunction() {
    let message, x, y;
    message = document.getElementById("result");
    message.innerHTML = "";
    x = document.getElementById("myInput").value;
    y = document.getElementById("myInput");
    y.style.border = '1px solid green';
    try {
        if (x == "") throw "пусто";
        if (isNaN(x)) throw "не число";
        x = Number(x.length);
        if (x < 13) throw "слишком мало";
        if (x > 13) throw "слишком много";
    } catch (err) {
        message.innerHTML = "вы ввели " + err;
        y.style.border = '1px solid red';
    }
}




