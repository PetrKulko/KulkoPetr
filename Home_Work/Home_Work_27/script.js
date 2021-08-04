// 1
function openbox() {
    let display = document.getElementById("block_text").style.display;
    let btn = document.getElementById("btn").innerHTML;
    if (display == "none") {
        document.getElementById("block_text").style.display = "block";
        document.getElementById("btn").innerHTML = "Закрыть";
    } else {
        document.getElementById("block_text").style.display = "none";
        document.getElementById("btn").innerHTML = "Больше";
    }
};

// 2
let car = {
    "mark": "BMW",
    "year": 2015,
    "color": "red"
}

car.country = "German";
car.price = 22000;

delete car.year;
delete car.price;

console.log(car);


// 3
function maxNumb() {
    let result = Math.max(5, 80, -44, 120, 60, -5, 206);
    alert(result);
}