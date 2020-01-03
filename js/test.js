"use strict";

let money = prompt("Your buget on month", "15000");
let time = prompt("Enter data in format YYYY-MM-DD", "2020-01-03");

let appData = {
    buget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Enter compulsory cost item this month", ""),
    a2 = prompt("How much will it cost", ""),
    a3 = prompt("Enter compulsory cost item this month", ""),
    a4 = prompt("How much will it cost", "");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.buget / 30);
