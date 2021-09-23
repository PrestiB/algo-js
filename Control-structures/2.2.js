const readlineSync = require("readline-sync");
let minAge = readlineSync.question("What is the minimum age to participate?");
let maxAge = readlineSync.question("What is the maximumn age to participate?");
let currentAge = readlineSync.question("What is your current age?");
if (minAge >= 18 && maxAge <= 40) {
  console.log("You're welcome at the party");
}
