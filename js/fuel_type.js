//Получение литров топлива
//
//
//
// USD: доллар
// EUR: евро
// RUB: рубль
// KZT: тенге
// UZS: сум

const FuelType = {
    Ai98: { name: "Аи-98", code: "1", price: 53.7 },
    Ai95: { name: "Аи-95", code: "2", price: 50.2 },
    Ai92: { name: "Аи-92", code: "3", price: 45.3 },
    Ai80: { name: "Аи-80", code: "4", price: 40.4 },
    Diesele: { name: "дизель", code: "5", price: 50.6 },
    Gas: { name: "газ", code: "6", price: 30 },
};
let sum = 0;
let userChosenFuel = "";

function showUserChoosingMsg() {
    let userChoice = prompt(
        `Выберите тип топлива.
        \n1 - ${FuelType.Ai98.name}
        \n2 - ${FuelType.Ai95.name}
        \n3 - ${FuelType.Ai92.name}
        \n4 - ${FuelType.Ai80.name}
        \n5 - ${FuelType.Diesele.name}
        \n6 - ${FuelType.Gas.name}`,
        "1"
    );

    if (userChoice === "1") {
        userChosenFuel = FuelType.Ai98;
    }
    else if (userChoice === "2") {
        userChosenFuel = FuelType.Ai95;
    }
    else if (userChoice === "3") {
        userChosenFuel = FuelType.Ai92;
    }
    else if (userChoice === "4") {
        userChosenFuel = FuelType.Ai80;
    }
    else if (userChoice === "5") {
        userChosenFuel = FuelType.Diesele;
    }
    else if (userChoice === "6") {
        userChosenFuel = FuelType.Gas;
    }
    else {
        alert("Неверные данные");
        showUserChoosingMsg();
    }
}

function showSumEnterMessage() {
    sum = prompt(
        `Вы выбрали ${userChosenFuel.name}, введите сумму на которую хотите заправиться.`,
        "500"
    );

    if (isNaN(sum) === true) {
        alert("Неверные данные, введите число")
        showSumEnterMessage();
    }
}


//начало программы
showUserChoosingMsg();

showSumEnterMessage();

let numbersOfLiters = Number(sum) / userChosenFuel.price;
numbersOfLiters = Number(numbersOfLiters.toFixed(2));

//Вывод сообщение
let finalMessage = `${userChosenFuel.name} на ${sum} сом выйдет ${numbersOfLiters} литров.`;

console.log(finalMessage);

let container = document.querySelector("h1");
container.textContent = finalMessage;
