//Обмен валют на сомы
//
//
// USD: доллар
// EUR: евро
// RUB: рубль
// KZT: тенге
// UZS: сум

const Currency = {
    USD: { name: "USD", ruName: "доллар", code: "1", exchange_rate: 86.92 },
    EUR: { name: "EUR", ruName: "евро", code: "2", exchange_rate: 89.85 },
    RUB: { name: "RUB", ruName: "рубль", code: "3", exchange_rate: 0.785 },
    KZT: { name: "KZT", ruName: "тенге", code: "4", exchange_rate: 0.1154 },
    UZS: { name: "UZS", ruName: "сум", code: "5", exchange_rate: 0.0067 },
};
let sum = 0;
let chosenCurrency = Currency.USD;

function showUserChoosingMsg() {
    let userChoice = prompt(
        `Выберите валюту которую хотите обменять на сомы.
        \n1 - доллар
        \n2 - евро
        \n3 - рубль
        \n4 - тенге
        \n5 - сум`,
        "1"
    );
    if (userChoice === "1") {
        chosenCurrency = Currency.USD;
    }
    else if (userChoice === "2") {
        chosenCurrency = Currency.EUR;
    }
    else if (userChoice === "3") {
        chosenCurrency = Currency.RUB;
    }
    else if (userChoice === "4") {
        chosenCurrency = Currency.KZT;
    }
    else if (userChoice === "5") {
        chosenCurrency = Currency.UZS;
    }
    else {
        alert("Неверные данные");
        showUserChoosingMsg();
    }
};

function showSumEnterMessage() {
    sum = prompt(
        `Ваша валюта ${chosenCurrency.ruName}, введите сумму которую хотите обменять на сомы.`,
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

let sumInKGS = Number(sum) * chosenCurrency.exchange_rate;
sumInKGS = Number(sumInKGS.toFixed(2));

//Вывод сообщение
let finalMessage = `${sum} ${chosenCurrency.ruName} = ${sumInKGS} сом.`;

console.log(finalMessage);

let container = document.querySelector("h1");
container.textContent = finalMessage;
