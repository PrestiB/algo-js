const readlineSync = require("readline-sync");

let favoriteNum = parseInt(readlineSync.question("What is your favorite number? ")) 

while (favoriteNum != 42) {
    console.log("Are you sure ?");
    favoriteNum = parseInt(readlineSync.question("What is your favorite number? "))
}

console.log("ok")
