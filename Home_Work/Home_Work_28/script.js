let user = {
    firstName: "Maya",
    lastName: "Dos",
    language: " ",
    set lang(lang) {
        this.language = lang;
    },
    name: " ",
    set nameCat(nameCat) {
        this.name = nameCat;
    },
    "name Dog": "Profi",

}

user.nameCat = "Lucky";
user.lang = "ua";
delete user["name Dog"];

document.body.innerHTML = user.firstName + "<br>" + user.lastName + "<br>" + user.language + "<br>" + user.name;