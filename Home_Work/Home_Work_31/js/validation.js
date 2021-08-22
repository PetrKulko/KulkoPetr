// var
let form = document.querySelector('.formWithValidation');
let validateBtn = form.querySelector('.validateBtn');
let from = form.querySelector('.from');
let password = form.querySelector('.password');
let passwordConfirmation = form.querySelector('.passwordConfirmation');
let where = form.querySelector('.where');
let message = form.querySelector('.message');
let fields = form.querySelectorAll('.field');

// FUNCTIONS

// добавляем error
let generateError = function (text) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
}

// удаляем класс error
let removeValidation = function () {
    let errors = form.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

// проверяем на заполненность input
let checkFieldsPresence = function () {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            let error = generateError('Cannot be blank');
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
}

// проверяем совпадают ли пароли
let checkPasswordMatch = function () {
    if (password.value !== passwordConfirmation.value) {
        let error = generateError('Passwords doesnt match');
        password.parentElement.insertBefore(error, password);
    }
}

// убираем стандартное событие submit
form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkFieldsPresence();
    checkPasswordMatch();
});