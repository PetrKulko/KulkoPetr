// == CALCULATOR == //

// var
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');
let buttonPercent = document.getElementById('buttonPercent');
let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
let show = document.getElementById('show');

// functions 
function showResault(number) {
    show.innerHTML = number;
}

function operationResault(operationChild) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    switch (operationChild) {
        case '+':
            showResault(number1 + number2);
            break;
        case '-':
            showResault(number1 - number2);
            break;
        case '*':
            showResault(number1 * number2);
            break;
        case '/':
            showResault(number1 / number2);
            break;
        case '%':
            showResault(number1 / 100 * number2 + '%');
            break;
        default:
            showResault("Таких данных нет!");
    }
}

function buttonPlussClick() {
    operationResault('+');
}

function buttonMinusClick() {
    operationResault('-');
}

function buttonMultiplyClick() {
    operationResault('*');
}

function buttonDevideClick() {
    operationResault('/');
}

function buttonPercentClick() {
    operationResault('%');
}

// event
buttonPlus.addEventListener('click', buttonPlussClick);
buttonMinus.addEventListener('click', buttonMinusClick);
buttonMultiply.addEventListener('click', buttonMultiplyClick);
buttonDevide.addEventListener('click', buttonDevideClick);
buttonPercent.addEventListener('click', buttonPercentClick);