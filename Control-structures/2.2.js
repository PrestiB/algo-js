/*const readlineSync = require("readline-sync");
let minAge = readlineSync.question("Give me a number");
let currentAge = readlineSync.question("Give me another one");
let maxAge = readlineSync.question("Give me a last one");

if ((currentAge > minAge) && (currentAge < maxAge)) {
  console.log("It's ok !");
} else {
  console.log("Error !");
}*/

const readlineSync = require("readline-sync");
let minAge = readlineSync.question("Give me a number");
let currentAge = readlineSync.question("Give me another one");
let maxAge = readlineSync.question("Give me a last one");

if (currentAge > minAge && currentAge < maxAge) {
  console.log("It's ok !");
} else if (minAge > maxAge) {
  console.log("Error !");
} else {
  console.log("Sorry but you don't understand");
}
