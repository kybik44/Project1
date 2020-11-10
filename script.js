let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpences: {},
    income: [],
    savings: false
};

let a1 = prompt("Ваш бюджет на месяц?", ''),
    a2 = prompt('Введите дату в формате YYYY-MM-DD', ''),
    a3 = prompt("Ваш бюджет на месяц?", ''),
    a4 = prompt('Введите дату в формате YYYY-MM-DD', '');


    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;
console.log(appData.expenses.a1);
    alert(appData.budget / 30);