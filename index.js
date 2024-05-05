#! /usr/bin/env node
import inquirer from "inquirer";
//Define the list of currencies and their exchange rate
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    JYP: 113,
    CAD: 1.3,
    AUD: 1.65,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from", message: "Enter From Currency", type: "list",
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "INR", "PKR"]
    },
    {
        name: "to", message: "Enter To Currency", type: "list",
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "INR", "PKR"]
    },
    {
        name: "amount", message: "Enter Your Amount", type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
//formula of conversion
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
//Display the converted amount
console.log(Math.round(convertedAmount));
