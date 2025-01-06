//выбор планеты

let message = "";

function showUserChoosingMsg() {
    let userChoice = prompt(
        `Выберите номер планеты:
        \n1
        \n2
        \n3
        \n4
        \n5
        \n6 
        \n7
        \n8`,
        "1"
    );

    if (userChoice === "1") {
        message = "Меркурий"
    }
    else if (userChoice === "2") {
        message = "Венера"
    }
    else if (userChoice === "3") {
        message = "Земля"
    }
    else if (userChoice === "4") {
        message = "Марс"
    }
    else if (userChoice === "5") {
        message = "Юпитер"
    }
    else if (userChoice === "6") {
        message = "Сатурн"
    }
    else if (userChoice === "7") {
        message = "Уран"
    }
    else if (userChoice === "8") {
        message = "Нептун"
    }
    else {
        alert("Неверные данные");
        showUserChoosingMsg();
    }
}

showUserChoosingMsg();

alert(`Вы выбрали ${message}`);