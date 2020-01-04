"use strict";

let money = +prompt("Your budget on month", "15000");
let time = prompt("Enter data in format YYYY-MM-DD", "2020-01-03");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Enter compulsory cost item this month", ""),
        b = prompt("How much will it cost", "");

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("Hey! Change your Data")
        i--;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Daily budget: " + appData.moneyPerDay);

if(appData.moneyPerDay < 500) {
    console.log("Minimal level of income");
} else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
    console.log("Average income");
} else if(appData.moneyPerDay > 2000) {
    console.log("High income");
} else {
    console.log("Error");
}
