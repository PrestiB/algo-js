const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question("Can you give me a decimal number ?");
let secondNumber = readlineSync.question("Can you give me another one ?");
console.log(Math.floor (firstNumber) * Math.floor (secondNumber));