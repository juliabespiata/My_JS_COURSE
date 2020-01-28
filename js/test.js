"use strict";

let money, time;

function start() {
    money = +prompt("Your budget on month", "15000");
    time = prompt("Enter data in format YYYY-MM-DD", "2020-01-03");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget on month", "15000");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Enter compulsory cost item this month", ""),
                b = prompt("How much will it cost", "");

            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

                console.log("done");
                appData.expenses[a] = b;

            } else {
                console.log("Hey! Change your Data");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Daily budget: " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if(appData.moneyPerDay < 500) {
            console.log("Minimal level of income");
        } else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
            console.log("Average income");
        } else if(appData.moneyPerDay > 2000) {
            console.log("High income");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What is the amount of savings?"),
                percent = +prompt("What is percent?");

            appData.monthIncome = save/100/12*percent;
            alert("Month Income is: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Article of optional costs");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
         }
    },
    chooseIncome: function() {
        let items = prompt('What sources of additional income? (list through comma)', '');
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("You entered incorrect data")
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Something else?'));
            appData.income.sort();
        }

        appData.income.forEach (function(itemmassive, i) {
            alert("Ways of generate additional income: " + (i+1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log("Program includes datas: " + key + " - " + appData[key]);
}










// Use While

// let i = 0;
// while (i < 2) {
//     let a = prompt("Enter compulsory cost item this month", ""),
//         b = prompt("How much will it cost", "");

//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

//         console.log("done");
//         appData.expenses[a] = b;

//     } else {
//         console.log("Hey! Change your Data");

//         i--;
//     }
//     i++;
// }

// Use do ... while

// let i = 0;
// do {
//     let a = prompt("Enter compulsory cost item this month", ""),
//     b = prompt("How much will it cost", "");

//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

//     console.log("done");
//     appData.expenses[a] = b;

//     } else {
//     console.log("Hey! Change your Data");
//     i--;
//     }
//     i++;
// }

// while(i < 2);
