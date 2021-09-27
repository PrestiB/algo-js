const readlineSync = require("readline-sync");
let a = parseInt(
  readlineSync.question("What is the lenght of the rectangle ? ")
);
let b = parseInt(
  readlineSync.question("What is the width of the rectangle ? ")
);

function calcSurface(a, b) {
  return a * b;
} /* Calculate the surface of a rectangle */

console.log("The surface of the rectangle is : " + calcSurface(a, b));
