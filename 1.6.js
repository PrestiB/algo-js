const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question("Can you give me a integer number ?");
let secondNumber = readlineSync.question("Can you give me another one ?");
console.log(firstNumber % secondNumber);
