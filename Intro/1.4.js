const readlineSync = require("readline-sync");
let name = readlineSync.question("Can you give me your name please ?");
let firstName = readlineSync.question("Can you give me your firstname please ?");
let city = readlineSync.question("In which city do you live? ?");
console.log("Your name is " + name + " " + firstName + " and you live in " + city + ".");