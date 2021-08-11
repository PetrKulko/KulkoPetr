// 1

function one() {
    console.log(arguments.length);
}

one(1, 2, 2, 3, 4, 5, 6, 7, 8);

// 2

let User = function (name, surname, age, planet, language, work, weight, height, mood) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.planet = planet;
    this.language = language;
    this.work = work;
    this.weight = weight;
    this.height = height;
    this.mood = mood;
    this.sayHello = () => {
        return `Привет! Меня зовут ${this.name} ${this.surname}, мне ${this.age} лет, я из планеты ${this.planet}, говорю на ${this.language} языке, работаю ${this.work}. Мой вес - ${this.weight}, а рост - ${this.height}, моё настроение сегодня ${this.mood}!`;
    };
}

let luke = new User("Люк", "Скайвокер", "85", "Татуин", "Английском", "джедаем", "174", "80", "хорошее");
let sidious = new User("Дарт", "Сидиус", "249", "Набу", "Английском", "ситхом ", "185", "90", "плохое");
let solo = new User("Хан", "Соло", "48", "Чевбака", "Английском", "пилотом", "183", "75", "хорошее");

document.body.innerHTML = luke.sayHello() + "<br>" + sidious.sayHello() + "<br>" + solo.sayHello();